import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvailableCarDetailsComponent } from './core/component/available-car-details/available-car-details.component';
import { NavigationComponent } from './core/component/navigation/navigation.component';
import { FilterComponent } from './core/component/filter/filter.component';
import { CarListComponent } from './core/component/car-list/car-list.component';
import { BookCarsComponent } from './core/component/book-cars/book-cars.component';
import { ConfirmComponent } from './core/component/confirm/confirm.component';
import { SearchByFilterPipe } from './core/component/pipes/search-by-filter.pipe';
import { HomeComponent } from './core/component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AvailableCarDetailsComponent,
    FilterComponent,
    CarListComponent,
    BookCarsComponent,
    ConfirmComponent,
    SearchByFilterPipe,
    HomeComponent
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
