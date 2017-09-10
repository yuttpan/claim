import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosxpopdComponent } from './hosxpopd.component';

describe('HosxpopdComponent', () => {
  let component: HosxpopdComponent;
  let fixture: ComponentFixture<HosxpopdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosxpopdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosxpopdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
