import { Injectable } from '@angular/core';
import { Car, CarClass } from '../../model/car-types';
import { CarFilter } from '../../model/car-filter';
import { SearchByFilterPipe } from '../../component/pipes/search-by-filter.pipe';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {
  public pageFilter: CarFilter;
  public filterSelected = false;
  public listOfCars: Car[] = [{
      id: 1,
      brand: 'Toyota',
      name: 'Auris',
      class: CarClass.BASIC,
      wheels: 4,
      passenger: 4,
      costPerDay: 20,
      imagePath: '../../../../assets/icons/toyotaImg1.jpg'
    },
    {
      id: 2,
      brand: 'Hyundai',
      name: 'i30',
      class: CarClass.INTERMEDIARY,
      wheels: 4,
      passenger: 4,
      costPerDay: 30,
      imagePath: '../../../../assets/icons/hyundaiImg.jpg'

    },
    {
      id: 3,
      brand: 'Mercedes',
      name: 'A1',
      class: CarClass.ECONOMY,
      wheels: 4,
      passenger: 4,
      costPerDay: 30,
      imagePath: '../../../../assets/icons/mrcdzA1img.jpg'

    },
    {
      id: 4,
      brand: 'Rolls Royce',
      name: 'Phantom',
      class: CarClass.PREMIUM,
      wheels: 4,
      passenger: 6,
      costPerDay: 130,
      imagePath: '../../../../assets/icons/RRImg1.jpg'

    },
    {
      id: 5,
      brand: 'Nissan',
      name: 'Kuga',
      class: CarClass.INTERMEDIARY,
      wheels: 4,
      passenger: 8,
      costPerDay: 40,
      imagePath: '../../../../assets/icons/nissan-kuga.jpg'

    },
    {
      id: 6,
      brand: 'Mercedes',
      name: 'C280',
      class: CarClass.PREMIUM,
      wheels: 4,
      passenger: 5,
      costPerDay: 100,
      imagePath: '../../../../assets/icons/mrcdzC.jpg'

    },
    {
      id: 7,
      brand: 'Audi',
      name: 'A8',
      class: CarClass.PREMIUM,
      wheels: 4,
      passenger: 5,
      costPerDay: 80,
      imagePath: '../../../../assets/icons/AudieA8.jpg'

    },
    {
      id: 8,
      brand: 'BMW',
      name: 'i8',
      class: CarClass.PREMIUM,
      wheels: 4,
      passenger: 2,
      costPerDay: 130,
      imagePath: '../../../../assets/icons/BMWi8.jpg'

    }
  ];

  public listOfAvailableCars: Car[] = this.listOfCars;
  public tmplistOfAvailableCars: Car[] = this.listOfCars;

  public selectedCars: Car[] = [];
  public bookedCars: Car[] = [];
  public filteredCars: Car[] = [];

  constructor() {
    this.listOfCars.sort(this.compare);
  }

  public selectCar(car: Car) {
    this.listOfAvailableCars = this.listOfAvailableCars.filter(cr => cr.id !== car.id);
    this.filteredCars = this.filteredCars.filter(cr => cr.id !== car.id);

    this.selectedCars.push(car);
    this.selectedCars.sort(this.compare);
  }

  public removeSelectedCar(car: Car) {
    this.selectedCars = this.selectedCars.filter(cr => cr.id !== car.id);
    this.listOfAvailableCars.push(car);
    this.listOfAvailableCars.sort(this.compare);

  }

  public bookCars() {
    this.bookedCars = this.selectedCars;
    this.selectedCars = [];
    this.listOfAvailableCars = this.listOfCars;
    this.listOfAvailableCars.sort(this.compare);
  }

  public setFilter(filterSelection: CarFilter) {
    this.filterSelected = true;
    this.pageFilter = filterSelection;
    this.filteredCars = new SearchByFilterPipe().transform(this.listOfAvailableCars, this.pageFilter);
    this.filteredCars.sort(this.compare);
  }

  public compare(car1: Car, car2: Car) {
    const car1Name = car1.brand.toLowerCase();
    const car2Name = car2.brand.toLowerCase();
    return car1Name > car2Name ? 1 : -1;
  }
}
