import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * get all products
   * @returns observable of products list
   */
   getProductsList(categoryId) {
    // to do add pagination later
    console.log(categoryId);
    const req = `${environment.endpoints.PRODUCTS_URL}`;
    return this.httpClient.get<Product[]>(req);
  }
}
