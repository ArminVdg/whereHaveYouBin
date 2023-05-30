import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AddBinBoxComponent } from './add-bin-box/add-bin-box.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    AddBinBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapsApiKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
