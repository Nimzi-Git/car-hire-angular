import { Component, OnInit } from '@angular/core';
import { CarDetailsService } from '../../services/car-details/car-details.service';
import { Car } from '../../model/car-types';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  public bookedCars: Car[] = [];
  constructor(private carDetailSvc: CarDetailsService) {}

  ngOnInit() {
    this.bookedCars = this.carDetailSvc.bookedCars;
  }

}
