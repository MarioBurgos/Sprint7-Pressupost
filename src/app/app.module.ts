import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MyCheckboxComponent } from './components/shared/my-checkbox/my-checkbox.component';
import { FormsModule } from '@angular/forms';
import { WebPanelComponent } from './components/web-panel/web-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyCheckboxComponent,
    WebPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
