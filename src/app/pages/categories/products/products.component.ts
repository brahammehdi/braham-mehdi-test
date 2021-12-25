import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/produtcs.service';
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
  constructor(
    private router: Router,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getCategories();
  }

  /**
   *
   * @param ProductId: selected product ID
   * @param path: the pathe to go to
   */
  viewProduct(ProductId) {
      this.router.navigate([ProductId, 'view'], {relativeTo: this.activatedRoute});
  }

  getCategories() {
    this.productsService.getProductsList(this.pageIndex, this.pageSize, this.sort, this.filterValue).subscribe(
      (result) => {
        this.products = result.body;
        this.totalItems = result.headers.get('X-Total-Count') !== null ? result.headers.get('X-Total-Count') : 0;
      }
    );
  }

  // todo: add other function like pagination & filtring products

}
