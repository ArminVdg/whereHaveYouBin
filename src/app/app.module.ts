import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AddBinBoxComponent } from './add-bin-box/add-bin-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    AddBinBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
