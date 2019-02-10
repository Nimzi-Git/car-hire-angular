import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCarDetailsComponent } from './available-car-details.component';

describe('AvailableCarDetailsComponent', () => {
  let component: AvailableCarDetailsComponent;
  let fixture: ComponentFixture<AvailableCarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
