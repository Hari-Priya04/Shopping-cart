import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import{HttpClientModule} from '@angular/common/http';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { VideoComponent } from './video/video.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { PaynowComponent } from './paynow/paynow.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { GraphComponent } from './graph/graph.component';




@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    VideoComponent,
    ScrollToTopComponent,
    PaynowComponent,
    FilterPipe,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }