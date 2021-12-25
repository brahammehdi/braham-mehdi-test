import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllProductsAction } from 'src/app/ngrx/products.actions';
import { ProductsState, ProductsStates } from 'src/app/ngrx/products.reducer';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  pageIndex = 0;
  pageSize = 8;
  sort = {
    prop: 'creationDate',
    dir: 'desc'
  };
  filterValue = null;
  totalItems = null;
  productsState$: Observable<ProductsState>;
  readonly ProductStates = ProductsStates;
  categoryId = null;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<any>
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.categoryId = +params.categoryId;
    });
    this.store.dispatch(new GetAllProductsAction(this.categoryId)); // todo: add pagination params later
  }

  ngOnInit() {
    this.getProducts();
  }

  /**
   *
   * @param ProductId: selected product ID
   * @param path: the pathe to go to
   */
  viewProduct(ProductId) {
    this.router.navigate([ProductId, 'view'], { relativeTo: this.activatedRoute });
  }

  getProducts() {
    this.productsState$ = this.store.pipe(
      map((state) => state.productsState));
  }

  // todo: add other function like pagination & filtring products

}
