import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { CarDetailsService } from '../../services/car-details/car-details.service';
import { Car } from '../../model/car-types';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewChecked {

  public selectedCarDetails: Car[] = [];

  constructor(private carDetailSvc: CarDetailsService,
    private cdRef: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    this.selectedCarDetails = this.carDetailSvc.selectedCars;
    this.cdRef.detectChanges();
  }

  public resetFilter() {
    this.carDetailSvc.filterSelected = false;
  }

}
