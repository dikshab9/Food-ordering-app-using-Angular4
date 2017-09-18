import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchService } from './search/search.service';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ModalComponent}  from './modal/modal.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { SearchContentComponent } from './search-content/search-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    SearchComponent,
    SearchContentComponent ,
    FooterComponent
  ],
  imports: [
    BrowserModule,HttpModule

  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }