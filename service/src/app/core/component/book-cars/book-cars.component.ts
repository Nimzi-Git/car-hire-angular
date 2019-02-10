import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { CarDetailsService } from '../../services/car-details/car-details.service';
import { Car } from '../../model/car-types';
import { PageSelection } from '../../model/page-selection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-cars',
  templateUrl: './book-cars.component.html',
  styleUrls: ['./book-cars.component.css']
})
export class BookCarsComponent implements OnInit, AfterViewChecked {
  public selectedCars: Car[];
  public pageSelection = PageSelection;

  constructor(private carDetailSvc: CarDetailsService,
    private cdRef: ChangeDetectorRef,
    private router: Router) {}

  ngOnInit() {
    this.selectedCars = this.carDetailSvc.selectedCars;
  }

  ngAfterViewChecked() {
    this.selectedCars = this.carDetailSvc.selectedCars;
    this.cdRef.detectChanges();
  }

  public onClickBookCar() {
    this.carDetailSvc.bookCars();
    this.router.navigate(['rent-a-car/', 'confirmation']);
  }
}
