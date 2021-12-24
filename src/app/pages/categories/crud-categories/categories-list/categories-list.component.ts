import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories = [
    {
      id: 1,
      name: 'sport',
      imgSrc: 'https://www.lhebdojournal.com/wp-content/uploads/sites/22/2021/03/sports.jpg',
      creationDate: '2021-12-14T07:11:00.35694Z'
    },
    {
      id: 2,
      name: 'Electronics',
      imgSrc: 'https://www.hbfuller.com/-/media/images/markets-and-applications/electronics/portable-device/portable-electronic-devices.jpg',
      creationDate: '2021-12-14T07:11:00.35694Z'
    },
    {
      id: 3,
      name: 'Clothing',
      imgSrc: 'https://i.la-croix.com/729x0/smart/2017/05/04/1200844624/En-France-secteur-lhabillement-train-vivre-crise-structurelle-conjoncturelle_0.jpg',
      creationDate: '2021-12-14T07:11:00.35694Z'
    },
    {
      id: 4,
      name: 'Shoes',
      imgSrc: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg',
      creationDate: '2021-12-14T07:11:00.35694Z'
    },
    {
      id: 5,
      name: 'Jewelry',
      imgSrc: 'https://i.f1g.fr/media/madame/1900x1900/sites/default/files/img/2021/10/schiaparelli.jpg',
      creationDate: '2021-12-14T07:11:00.35694Z'
    },
    {
      id: 1,
      name: 'sport',
      imgSrc: 'https://www.lhebdojournal.com/wp-content/uploads/sites/22/2021/03/sports.jpg',
      creationDate: '2021-12-14T07:11:00.35694Z'
    },
    {
      id: 2,
      name: 'Electronics',
      imgSrc: 'https://www.hbfuller.com/-/media/images/markets-and-applications/electronics/portable-device/portable-electronic-devices.jpg',
      creationDate: '2021-12-14T07:11:00.35694Z'
    },
    {
      id: 3,
      name: 'Clothing',
      imgSrc: 'https://i.la-croix.com/729x0/smart/2017/05/04/1200844624/En-France-secteur-lhabillement-train-vivre-crise-structurelle-conjoncturelle_0.jpg',
      creationDate: '2021-12-14T07:11:00.35694Z'
    },
    {
      id: 4,
      name: 'Shoes',
      imgSrc: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg',
      creationDate: '2021-12-14T07:11:00.35694Z'
    },
    {
      id: 5,
      name: 'Jewelry',
      imgSrc: 'https://i.f1g.fr/media/madame/1900x1900/sites/default/files/img/2021/10/schiaparelli.jpg',
      creationDate: '2021-12-14T07:11:00.35694Z'
    },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCategory(categoryId, path){
    if (categoryId) {
      this.router.navigate(['categories', categoryId, path]);
    } else {
      this.router.navigate(['categories', path]);
    }
    
  }

}
