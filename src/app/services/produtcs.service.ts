import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
   *
   * @param page: current products pageIndex
   * @param size: number of products to get
   * @param sort: how to sort result & with prop to sort with
   * @returns list of products
   */
   getProductsList(page: number, size: number, sort: {dir: string; prop: string}, filterValue?: string) {
    const params = { page, size, sort: Object.values(sort), filterValue };
    let queryParms = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value + '') {
        queryParms = queryParms.append(key, value + '');
      }
    }
    const req = `${environment.endpoints.PRODUCTS_URL}`;
    return this.httpClient.get<Product[]>(req, { params: queryParms, observe: 'response' });
  }
}
