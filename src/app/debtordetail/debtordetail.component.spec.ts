import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtordetailComponent } from './debtordetail.component';

describe('DebtordetailComponent', () => {
  let component: DebtordetailComponent;
  let fixture: ComponentFixture<DebtordetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtordetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
