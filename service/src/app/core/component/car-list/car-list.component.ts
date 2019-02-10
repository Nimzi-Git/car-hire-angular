import { Component, OnInit, Input, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Car } from '../../model/car-types';
import { CarDetailsService } from '../../services/car-details/car-details.service';
import { PageSelection } from '../../model/page-selection';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, AfterViewChecked {
  @Input() availableCars: Car[] = [];
  @Input() pageSelection: string;

  public pageSelectionType = PageSelection;

  constructor(private carDetailSvc: CarDetailsService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  public onSelectCar(carDetails: Car) {
    this.carDetailSvc.selectCar(carDetails);
  }

  public onRemove(carDetails: Car) {
    this.carDetailSvc.removeSelectedCar(carDetails);
  }

}
