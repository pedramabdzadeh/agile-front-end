import { Component, OnInit } from '@angular/core';
import {ProductService} from '../api-management/services/products/product.service';
import {Cart} from '../../models/cart';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PurchaseService} from '../api-management/services/purchase/purchase.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';



@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  cart: Cart;
  userDeliveryDetails: {address: string, phone_number: string};
  dates: string[];
  deliveryForm: FormGroup = new FormGroup(
    {
      address: new FormControl('',
        Validators.required
      ),
      newAddress: new FormControl(''),
      phone: new FormControl('', Validators.required),
      newPhone: new FormControl('', [
        Validators.pattern('9\\d{9}'),
      ]),
      deliveryTime: new FormControl('', Validators.required),
    }
  );

  newAddress: any;
  showNewAddress: boolean;
  newPhone: any;
  showNewPhone: boolean;
  inputFocus: boolean;
  constructor(
    private productService: ProductService,
    private purchaseService: PurchaseService,
    private matSnackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit() {
    this.productService.getCart().subscribe((result: Cart[]) => {
      this.cart = result[0];
    });
    this.purchaseService.getUserDeliveryDetails().subscribe(result => {
      this.userDeliveryDetails = result[0];
    });
    this.purchaseService.getDeliveryDate().subscribe((result) => {
      this.dates = result.dates;
    });
  }

  deleteFromCart(id: number) {
    this.productService.deleteFromCart(id).subscribe(() => {
      this.productService.getCart().subscribe((result: Cart[]) => {
        this.cart = result[0];
      });
    });
  }

  addNewAddress(newAddress: string) {
    this.showNewAddress = true;
  }

  addNewPhone(value: string) {
    this.showNewPhone = true;
  }

  submitForm() {
    this.purchaseService.order({
      products: this.cart.products,
      address: this.deliveryForm.get('address').value,
      delivery_date: this.deliveryForm.get('deliveryTime').value,
      phone_number: (<string> this.deliveryForm.get('phone').value).includes('+98') ? this.deliveryForm.get('phone').value
        : '+98' + this.deliveryForm.get('phone').value,
    }).subscribe((result) => {
      this.purchaseService.payOrder({order: +result.id}).subscribe(t => {
        this.matSnackBar.open('پرداخت با موفقیت انجام شد.', 'بستن', {duration: 2000});
        this.router.navigate(['/buyer-profile']);
      });
    });
  }
}
