import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../shared/models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   *
   * @param page: current categories pageIndex
   * @param size: number of categories to get
   * @param sort: how to sort result & with prop to sort with
   * @returns list of categories
   */
  getCategoriesList(page: number, size: number, sort: {dir: string; prop: string}, filterValue?: string) {
    const params = { page, size, sort: Object.values(sort), filterValue };
    let queryParms = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value + '') {
        queryParms = queryParms.append(key, value + '');
      }
    }
    const req = `${environment.endpoints.CATEGORIES_URL}`;
    return this.httpClient.get<Category[]>(req, { params: queryParms, observe: 'response' });
  }
}
