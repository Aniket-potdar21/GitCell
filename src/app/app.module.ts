import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { CustomizedCellComponent } from './customized-cell/customized-cell.component';




@NgModule({
  declarations: [
    AppComponent,
    CustomizedCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([CustomizedCellComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
