import { CarClass } from './car-types';

export interface CarFilter {
 brand: string;
 name: string;
 class: CarClass;
 minWheels: number;
 minPassenger: number;
 minCostPerDay: number;
}
