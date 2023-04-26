import { Component } from '@angular/core';
import { HomeNewsComponent as BaseComponent } from '../../../../../app/home-page/home-news/home-news.component';

@Component({
  selector: 'ds-home-news',
  styleUrls: ['./home-news.component.scss'],
  templateUrl: './home-news.component.html'
})

/**
 * Component to render the news section on the home page
 */
export class HomeNewsComponent extends BaseComponent {

 images = [
  
    {
      imageSrc:'/assets/dspace/images/nu.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:'/assets/dspace/images/3.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:'/assets/dspace/images/4.jpg',
      imageAlt: 'person2',
    },
    {
      imageSrc:'/assets/dspace/images/2.png',
      imageAlt: 'person2',
    },
    {
      imageSrc:'/assets/dspace/images/6.jpg',
      imageAlt: 'person2',
    },
    {
      imageSrc:'/assets/dspace/images/7.jpg',
      imageAlt: 'person2',
    },
    {
      imageSrc:'/assets/dspace/images/8.jpg',
      imageAlt: 'person2',
    },
  ];


 
}

