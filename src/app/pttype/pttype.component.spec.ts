import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PttypeComponent } from './pttype.component';

describe('PttypeComponent', () => {
  let component: PttypeComponent;
  let fixture: ComponentFixture<PttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
