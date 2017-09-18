import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { Headers, Http , Response} from '@angular/http';
import { RequestOptions } from '@angular/http';
import { SearchContentComponent } from './search-content/search-content.component';


@Component({
  selector: 'my-app',

  template: `<my-nav> </my-nav>
             <search></search>
             
             <my-footer> </my-footer>
            `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foodies-app';
 
}