import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MyCheckboxComponent } from './components/shared/my-checkbox/my-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExtrasPanelComponent } from './components/extras-panel/extras-panel.component';
import { MyInputWButtonsComponent } from './components/shared/my-input-w-buttons/my-input-w-buttons.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { TestFormComponent } from './pages/test-form/test-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyCheckboxComponent,
    ExtrasPanelComponent,
    MyInputWButtonsComponent,
    DashboardComponent,
    OrderListComponent,
    TestFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    OrderService],
  bootstrap: [AppComponent],
})
export class AppModule { }
