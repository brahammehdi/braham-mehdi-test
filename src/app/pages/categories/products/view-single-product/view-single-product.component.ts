import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllProductsAction } from 'src/app/ngrx/products.actions';
import { ProductsState } from 'src/app/ngrx/products.reducer';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.scss']
})
export class ViewSingleProductComponent implements OnInit {
  product: Product = null;
  selectedImgUrl = '';
  selectedModelValue = '';
  selectedColorValue = '';
  quantity = 0;
  productId = null;
  productSub: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<any>,
    private location: Location
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.productId = +params.categoryId;
    });
    this.store.dispatch(new GetAllProductsAction(1)); // todo get the selected category
  }

  ngOnInit() {
    this.getProduct();
  }

  /**
   * get product data
   */
  getProduct() {
    this.productSub = this.store.subscribe(store => {
      if (store.productsState.products.find(product => product.id === this.productId)) {
        this.product = store.productsState.products.find(product => product.id === this.productId);
        this.initData();
      } else {
        // todo: manage the case if the product was deleted
      }
    });
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy(): void {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }

  /**
   * init purchace form group
   */
  initData() {
    // todo: edit this function to init a real form group with initial values
    this.selectedImgUrl = this.product.attachements[0].url;
    this.selectedModelValue = this.product.models[0];
    this.selectedColorValue = this.product.colors[0];
    this.quantity = 1;
  }

  /**
   * change attachement select url
   * @param attachmentId: the attachment selected ID
   */
  onSelectImage(attachmentId) {
    this.selectedImgUrl = this.product.attachements.find(img => img.id === attachmentId).url;
  }

  /**
   * change model selected value
   * @param value: selected model
   */
  onSelectModel(event) {
    this.selectedModelValue = event.value;
  }

  /**
   * change color selected value
   * @param value: selected color
   */
  onSelectColor(event) {
    this.selectedColorValue = event.value;
  }

  /**
   * on change quantity value
   * @param value: quantity value
   */
  onChangeQuantity(event) {
    this.quantity = Number(event.target.value);
  }

  /**
   * on validate purchace
   */
  onAddProdct() {
    alert(`${this.quantity} ${this.product.name}, model: ${this.selectedModelValue}, color: ${this.selectedColorValue},
    added successfully to the basket`);
  }

}
