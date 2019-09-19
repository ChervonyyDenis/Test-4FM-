import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeveloperInfoComponent } from './components/developer-info/developer-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HistoryWindowComponent } from './components/history-window/history-window.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DeveloperInfoComponent,
    HistoryWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HistoryWindowComponent]
})
export class AppModule { }
