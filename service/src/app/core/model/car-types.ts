export enum CarClass {
 ALL = 'ALL',
 BASIC = 'BASIC',
 INTERMEDIARY = 'INTERMEDIARY',
 ECONOMY = 'ECONOMY',
 PREMIUM = 'PREMIUM'
}

export interface Car {
 id: number;
 brand: string;
 name: string;
 class: CarClass;
 wheels: number;
 passenger: number;
 costPerDay: number;
 imagePath: string;
}
