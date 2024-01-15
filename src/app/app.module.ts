import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ChartComponent } from './components/chart/chart.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { EditBarComponent } from './components/edit-bar/edit-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TicketComponent,
    ChartComponent,
    SearchBarComponent,
    EditBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
