// import { Component } from '@angular/core';
// import { Headers, Http , Response} from '@angular/http';
// import { RequestOptions } from '@angular/http';
// @Component({
//   selector: 'search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent {
//   title = 'app';
//   restaurants = [];
  
   
//  constructor(private http: Http) {
  
 
//  }
//    performSearch(cuisine: HTMLInputElement, loc: HTMLInputElement): void {
//      console.log("Inside performSearch"+cuisine+loc);
//      let headers = new Headers({ 'user-key' : '4ac19232b9bd80a871ee1735ec470f4a' });
//      let requestOpt = new RequestOptions({ headers: headers });
    
//     var apiLink = 'https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&cuisines=' + (cuisine.value);
    
 
//      this.http.get(apiLink, requestOpt)
//      .subscribe((res: Response) => {
//        this.restaurants = res.json().restaurants;
//        console.log(this.restaurants);
//      });
//    } 
   
   
//    performSearch1(loc: HTMLInputElement): void {
//     console.log("Inside performSearch1"+loc);
//      console.log(loc);
//     let headers = new Headers({ 'user-key' : '4ac19232b9bd80a871ee1735ec470f4a' });
//     let requestOpt = new RequestOptions({ headers: headers });
   
//    var apiLink = 'https://developers.zomato.com/api/v2.1/search?entity_id=&entity_type=city&cuisines=' + (loc.value);
   

//     this.http.get(apiLink, requestOpt)
//     .subscribe((res: Response) => {
//       this.restaurants = res.json().restaurants;
//       console.log(this.restaurants);
//     });
//   } 

// }

// import { SearchService } from './search.service';
// import { Component } from '@angular/core';

// @Component({
// selector: 'search',
// templateUrl: './search.component.html',
// styleUrls: ['./search.component.css']
// })
// export class SearchComponent {
// title = 'Foodie';
// restaurants=[];
// constructor(private searchService:SearchService){}


// performSearch(cuisine: HTMLInputElement): void {

// this.searchService.getRestaurants(cuisine);
// this.restaurants=this.searchService.restaurants;
// } 
//  }

// import { SearchService } from './search.service';
// import { Component } from '@angular/core';

// @Component({
// selector: 'search',
// templateUrl: './search.component.html',
// styleUrls: ['./search.component.css']
// })
// export class SearchComponent {
// title = 'Foodie';
// restaurants=[];
// cuisines:any;
// constructor(private searchService:SearchService){}


// performSearch1(cuisine: HTMLInputElement): void {
//  this.searchService.getRestaurants(cuisine);
//  this.restaurants=this.searchService.restaurants;
// } 
// performSearch_cuisine(city: HTMLInputElement): void {
//  this.searchService.getCuisine(city)
//    .subscribe((res: Response) => {
//    this.cuisines = res.json();
   
//    console.log(this.cuisines);
//  });

// } 
// performSearch(cuisine: HTMLInputElement): void {
  
//    this.searchService.getRestaurants(cuisine);
//    this.restaurants=this.searchService.restaurants;
//    } 

// }

import { SearchService } from './search.service';
import { Component } from '@angular/core';

@Component({
selector: 'search',
templateUrl: './search.component.html',
styleUrls: ['./search.component.css']
})
export class SearchComponent {
title = 'Foodie';
restaurants=[];
cuisines:any;
constructor(private searchService:SearchService){}


performSearch(cuisine: HTMLInputElement,city:HTMLInputElement): void {
 this.searchService.getRestaurants(cuisine,city);
 this.restaurants=this.searchService.restaurants;
} 
performSearch_cuisine(city: HTMLInputElement): void {
 this.searchService.getCuisine(city)
   .subscribe((res: Response) => {
   this.cuisines = res.json();
   
   console.log(this.cuisines);
 });

} 
}