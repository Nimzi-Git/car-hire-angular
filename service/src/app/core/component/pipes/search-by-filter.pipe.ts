import { Pipe, PipeTransform } from '@angular/core';
import { Car, CarClass } from '../../model/car-types';
import { CarFilter } from '../../model/car-filter';

@Pipe({
  name: 'searchByFilter'
})
export class SearchByFilterPipe implements PipeTransform {
 public selectedCarClass = [];
  transform(availableCarDetails: Car[], selectedFilters: CarFilter): Car[] {
   if (!availableCarDetails) {
     return [];
   }

   if (!selectedFilters) {
    return availableCarDetails;
   } else {
     if (selectedFilters.class === CarClass.ALL) {
      this.selectedCarClass = Object.values(CarClass);
     } else {
      this.selectedCarClass = [selectedFilters.class];
     }
     availableCarDetails = availableCarDetails
                                              .filter(car => (this.selectedCarClass.includes(car.class))
                                                             && (car.wheels >= selectedFilters.minWheels)
                                                             && (car.passenger >= selectedFilters.minPassenger)
                                                             && car.costPerDay >= selectedFilters.minCostPerDay);
    return availableCarDetails;
   }
  }
}
