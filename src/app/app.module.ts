import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AlertIncorrectDeviceComponent } from './alert-incorrect-device/alert-incorrect-device.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    InsertionSortComponent,
    MenuItemComponent,
    AlertIncorrectDeviceComponent,
    BubbleSortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
