import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Route, Router} from '@angular/router';

@Component({
  selector: 'app-top-search',
  templateUrl: './top-search.component.html',
  styleUrls: ['./top-search.component.scss']
})
export class TopSearchComponent implements OnInit {
  query: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  search() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        q: this.query
      },
    };
    // this.router.navigate(['/home'])
    // this.router.navigate(['/home'], navigationExtras);
    this.router.navigate([this.route.snapshot.url], navigationExtras);
  }
}
