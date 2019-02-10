import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { CarDetailsService } from '../../services/car-details/car-details.service';
import { Car } from '../../model/car-types';
import { PageSelection } from '../../model/page-selection';

@Component({
  selector: 'app-available-car-details',
  templateUrl: './available-car-details.component.html',
  styleUrls: ['./available-car-details.component.css']
})
export class AvailableCarDetailsComponent implements OnInit, AfterViewChecked {

 public availableCarDetails: Car[] = [];
 public selectedCars: Car[] = [];
 public pageSelection =  PageSelection;
 public allAvailableCarDetails: Car[] = [];


  constructor(private carSvc: CarDetailsService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
   this.allAvailableCarDetails = this.carSvc.listOfAvailableCars;
   this.availableCarDetails = this.carSvc.listOfAvailableCars;
  }

  ngAfterViewChecked() {
   if (this.carSvc.filterSelected) {
    this.availableCarDetails = this.carSvc.filteredCars;

   } else {
    this.availableCarDetails = this.carSvc.listOfAvailableCars;
    this.selectedCars = this.carSvc.selectedCars;
    this.cdRef.detectChanges();
   }
   this.allAvailableCarDetails = this.carSvc.listOfAvailableCars;
  }

}
