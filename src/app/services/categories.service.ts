import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
   * get all categories
   * @returns observable of categories list
   */
  getCategoriesList() {
    // to do add pagination later
    const req = `${environment.endpoints.CATEGORIES_URL}`;
    return this.httpClient.get<Category[]>(req);
  }
}
