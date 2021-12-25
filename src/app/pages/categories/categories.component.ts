import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllCategoriesAction } from 'src/app/ngrx/categories.actions';
import { CategoriesState, CategoriesStates } from 'src/app/ngrx/categories.reducer';
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
  categoriesState$: Observable<CategoriesState>;
  readonly CategoriesStates = CategoriesStates;
  constructor(
    private router: Router,
    private store: Store<any>
    ) {
      this.store.dispatch(new GetAllCategoriesAction(null)); // todo: add pagination params later
     }

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
    this.categoriesState$ = this.store.pipe(
      map((state) => state.categoriesState));
  }

  // todo: add other function like pagination & filtring categories
  salut() {
    console.log(this.categoriesState$);
    
  }
}

