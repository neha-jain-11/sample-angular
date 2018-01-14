import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { RedColorDirective } from './red-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateProductComponent,
    RedColorDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : '',
        component : HomeComponent
      },
      {
        path : 'product',
        component : ProductComponent
      },
      {
      path : 'updateProduct/:id',
      component : UpdateProductComponent
      }
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
