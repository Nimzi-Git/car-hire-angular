import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCarsComponent } from './book-cars.component';

describe('BookCarsComponent', () => {
  let component: BookCarsComponent;
  let fixture: ComponentFixture<BookCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
