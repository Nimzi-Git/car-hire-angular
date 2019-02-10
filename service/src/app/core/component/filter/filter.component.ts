import { Component, OnInit, Input, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Car, CarClass } from '../../model/car-types';
import { CarFilter } from '../../model/car-filter';
import { SearchByFilterPipe } from '../pipes/search-by-filter.pipe';
import { CarDetailsService } from '../../services/car-details/car-details.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewChecked {

  @Input() availableCars: Car[];
  @Input() allAvailableCars: Car[];

  public availableCarNames: string[] = [];
  public availableCarBrands: string[] = [];
  public maxCarPassenger = 0;
  public maxCostPday = 0;
  public maxWheelCount = 0;
  public availableVehicleTypes: string[] = [];
  public selectedVehicleType: string;
  public selectedVehicleBrand: string;
  public selectedWheelCount = 0;
  public selectedFilter: CarFilter = {
    brand: '',
    name: '',
    class: CarClass.ALL,
    minWheels: 0,
    minPassenger: 0,
    minCostPerDay: 0,
  };
  constructor(private carDetailSvc: CarDetailsService, private cdRef: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.setFilter();
    new SearchByFilterPipe().transform(this.allAvailableCars, this.selectedFilter);
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.setFilter();
  }


  public onVehicleBrandChange(vehicleBrand: string) {
    this.selectedVehicleBrand = vehicleBrand;
    this.selectedFilter.brand = vehicleBrand;
    this.carDetailSvc.setFilter(this.selectedFilter);
  }

  public onVehicleTypeChange(vehicleType: string) {
    this.selectedVehicleType = vehicleType;
    this.selectedFilter.class = < CarClass > vehicleType;
    this.carDetailSvc.setFilter(this.selectedFilter);

  }

  public onSelectionPassenger(passengerCount: number) {
    this.selectedFilter.minPassenger = passengerCount;
    this.carDetailSvc.setFilter(this.selectedFilter);

  }

  public onSelectionWheel(wheelCount: number) {
    this.selectedFilter.minWheels = wheelCount;
    this.carDetailSvc.setFilter(this.selectedFilter);
  }

  public onSelectionCost(costPerDay: number) {
    this.selectedFilter.minCostPerDay = costPerDay;
    this.carDetailSvc.setFilter(this.selectedFilter);
  }

  public setFilter() {
    this.allAvailableCars.map(car => {
      if (this.maxCarPassenger < car.passenger) {
        this.maxCarPassenger = car.passenger;
      }
      if (this.maxCostPday < car.costPerDay) {
        this.maxCostPday = car.costPerDay;
      }
      if (this.maxWheelCount < car.wheels) {
        this.maxWheelCount = car.wheels;
      }
    });
    this.availableVehicleTypes = this.allAvailableCars.map(car => car.class)
      .filter((value, index, self) => self.indexOf(value) === index);

    this.availableCarBrands = this.allAvailableCars.map(car => car.brand)
      .filter((value, index, self) => self.indexOf(value) === index);

    this.availableCarNames = this.allAvailableCars.map(car => car.name)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

}
