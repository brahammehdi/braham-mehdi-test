import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
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
    private categoriesService: CategoriesService
    ) { }

  ngOnInit() {
    this.getCategories();
  }

  /**
   * navigate to the selected category
   * @param categoryId: selected category ID
   * @param path: the pathe to go to
   */
  goToCategory(categoryId, path) {
    if (categoryId) {
      this.router.navigate(['categories', categoryId, path]);
    } else {
      this.router.navigate(['categories', path]);
    }
  }

  /**
   * get all categories
   */
  getCategories() {
    this.categoriesService.getCategoriesList(this.pageIndex, this.pageSize, this.sort, this.filterValue).subscribe(
      (result) => {
        this.categories = result.body;
        this.totalItems = result.headers.get('X-Total-Count') !== null ? result.headers.get('X-Total-Count') : 0;
      }
    );
  }

  // todo: add other function like pagination & filtring categories

}
