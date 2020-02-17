import { Component, OnInit } from '@angular/core';
import {Product} from '../products/models/product';
import {ProductService} from '../api-management/services/products/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountsService} from '../api-management/services/accounts/accounts.service';
import {Category} from '../../models/category';
import {CategoryService} from '../api-management/services/categories/category.service';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.scss']
})
export class VendorProfileComponent implements OnInit {
  products: Product[];
  addPanel: boolean;
  newProduct: Product = {title: '', price: 0 , category: 0};
  newImage: File;
  vendor: any;
  categories$: Observable<Category[]> = this.categoryService.listAll();
  campaignForm = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    discount: new FormControl('', Validators.required)
  });

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private accountsService: AccountsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = [];
    this.productService.productsChange$.subscribe(() => {
      this.getProducts();
    });
    this.route.queryParamMap.subscribe(
      (data) => {
        if (
          this.route.snapshot.queryParams.q
          || this.route.snapshot.queryParams.categoryID
          || this.route.snapshot.queryParams.sort) {
          this.productService.listVendorProducts(this.route.snapshot.queryParams.q, this.route.snapshot.queryParams.categoryID,
            this.route.snapshot.queryParams.sort).subscribe(
            (product: Product[]) => {
              this.products = product;
            }
          );
        }  else {
          this.getProducts();
        }
      }
    );
  }

  add() {
    this.newProduct.category = 1;
    this.productService.addProduct(this.newProduct).subscribe(
      (data: Product) => {
        const formData = new FormData();
        formData.append('image', this.newImage, this.newImage.name);
        this.productService.addImage(+data.id, formData).subscribe(() => {
          this.productService.listVendorProducts()
            .subscribe(
            (d: Product[]) => {
              this.products = d;
            }
          );
        });
      }
    );
  }
  getProducts() {
    this.productService.listVendorProducts().subscribe(
      (d: Product[]) => this.products = d
    );
  }

  setFile(event: Event) {
    // @ts-ignore
    this.newImage = event.target.files[0];
  }

  createCampaign() {
    const body  = {
      start_datetime: this.campaignForm.get('start').value,
      end_datetime: this.campaignForm.get('end').value,
      sale_amount: this.campaignForm.get('discount').value,
    };
    this.accountsService.createCampaign(body).subscribe(() => {});
  }
}
