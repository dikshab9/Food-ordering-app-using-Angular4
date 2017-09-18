// import { restaurants } from './restaurants';
// import { Injectable } from '@angular/core';
// import { Headers, Http , Response} from '@angular/http';
// import { RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';



// @Injectable()
// export class SearchService {
//   constructor(private http: Http) {};
//   restaurants = [];
 
//   getRestaurants(cuisine:HTMLInputElement){
     
   
//       let headers = new Headers({ 'user-key' : '4ac19232b9bd80a871ee1735ec470f4a' });
//       let requestOpt = new RequestOptions({ headers: headers });
//       var apiLink = 'https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&cuisines=' + (cuisine.value);
    
//       this.http.get(apiLink, requestOpt)
//       .subscribe((res: Response) => {
//         this.restaurants = res.json().restaurants;
//         console.log(this.restaurants);
//       });
// }
// getRestaurants(keyword:string){
//     let headers = new Headers({ 'user-key' : '4ac19232b9bd80a871ee1735ec470f4a' });
//     let requestOpt = new RequestOptions({ headers: headers });
 
//     return  this.http.get('https://developers.zomato.com/api/v2.1/search?q=' + keyword, requestOpt)
//             .map((response : Response) => response.json() as restaurants[]);
    
//   }

// }

// import { Injectable } from '@angular/core';
// import { Headers, Http , Response} from '@angular/http';
// import { RequestOptions } from '@angular/http';
// @Injectable()
// export class SearchService {
//    constructor(private http: Http) {};
//    restaurants = [];
//    cuisine:any;
//    getRestaurants(cuisine:HTMLInputElement){
       
     
//        let headers = new Headers({ 'user-key' : '2070452acff812f8390d2927eb2ceed0' });
//        let requestOpt = new RequestOptions({ headers: headers });
//        var apiLink = 'https://developers.zomato.com/api/v2.1/search?entity_id=&entity_type=city&cuisines=' + (cuisine.value);
//        this.http.get(apiLink, requestOpt)
//        .subscribe((res: Response) => {
//          this.restaurants = res.json().restaurants;
//          console.log(this.restaurants);
//        });
//  }

//  getCuisine(city:any):any{
//    let headers = new Headers({ 'user-key' : '2070452acff812f8390d2927eb2ceed0' });
//    let requestOpt = new RequestOptions({ headers: headers });
//    console.log(city.value);
//    var apiLink = 'https://developers.zomato.com/api/v2.1/cuisines?city_id='+(city.value);
//    return this.http.get(apiLink, requestOpt);
//  }
// }

import { Injectable } from '@angular/core';
import { Headers, Http , Response} from '@angular/http';
import { RequestOptions } from '@angular/http';
@Injectable()
export class SearchService {
   constructor(private http: Http) {};
   restaurants = [];
   cuisine:any;
   getRestaurants(cuisine:HTMLInputElement, city:HTMLInputElement){
       
     
       let headers = new Headers({ 'user-key' : '2070452acff812f8390d2927eb2ceed0' });
       let requestOpt = new RequestOptions({ headers: headers });
     
       var apiLink = 'https://developers.zomato.com/api/v2.1/search?entity_id='+(city.value)+'&entity_type=city&cuisines=' + (cuisine.value);
       this.http.get(apiLink, requestOpt)
       .subscribe((res: Response) => {
         this.restaurants = res.json().restaurants;
         console.log(this.restaurants);
       });
 }

 getCuisine(city:HTMLInputElement):any{
   let headers = new Headers({ 'user-key' : '2070452acff812f8390d2927eb2ceed0' });
   let requestOpt = new RequestOptions({ headers: headers });
   // console.log(city.value);
   var apiLink = 'https://developers.zomato.com/api/v2.1/cuisines?city_id='+(city.value);
   return this.http.get(apiLink, requestOpt);
 }
}