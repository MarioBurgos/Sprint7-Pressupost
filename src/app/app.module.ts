import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MyCheckboxComponent } from './components/shared/my-checkbox/my-checkbox.component';
import { FormsModule } from '@angular/forms';
import { WebPanelComponent } from './components/web-panel/web-panel.component';
import { MyInputWButtonsComponent } from './components/shared/my-input-w-buttons/my-input-w-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyCheckboxComponent,
    WebPanelComponent,
    MyInputWButtonsComponent,
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
