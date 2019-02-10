import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailableCarDetailsComponent } from './core/component/available-car-details/available-car-details.component';
import { NavigationComponent } from './core/component/navigation/navigation.component';
import { BookCarsComponent } from './core/component/book-cars/book-cars.component';
import { ConfirmComponent } from './core/component/confirm/confirm.component';
import { HomeComponent } from './core/component/home/home.component';

const routes: Routes = [{
 path: '',
 redirectTo: 'rent-a-car',
 pathMatch: 'full'
},
{
 path: 'rent-a-car',
 component: NavigationComponent,
 children: [
  {
   path: '',
   component: HomeComponent
  },
  {
   path: 'find-a-car',
   component: AvailableCarDetailsComponent
  },
  {
   path: 'book-cars',
   component: BookCarsComponent
  },
  {
   path: 'confirmation',
   component: ConfirmComponent
  }

 ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
