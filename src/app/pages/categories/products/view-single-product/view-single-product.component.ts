import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
    this.getProduct();
  }

  /**
   * get product data
   */
  getProduct() {
    this.product = {
      id: 1,
      name: 'nike',
      categoryId: 1,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      oldPrice: 200,
      price: 150,
      discount: 10,
      evaluation: 4.5,
      quantity: 10,
      commentsCount: 100,
      colors: [
        'black', 'red', 'white'
      ],
      models: [
        'simple', 'sport+'
      ],
      deliveryMinDays: 10,
      deliveryMaxDays: 20,
      attachements: [{
        id: 1,
        url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/' +
          'air-max-2021-herenschoen-gv0Z2s.png'
      },
      {
        id: 2,
        url: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9244e1e5-8975-4438-b716-f3c9628c0921/' +
          'air-max-270-essential-herenschoen-bRM6s9.png'
      },
      ],
      creationDate: '2021-12-14T07:11:00.35694Z'
    };
    this.initData();
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
