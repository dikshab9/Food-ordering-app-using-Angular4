

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