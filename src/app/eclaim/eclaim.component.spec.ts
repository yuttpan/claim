import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EclaimComponent } from './eclaim.component';

describe('EclaimComponent', () => {
  let component: EclaimComponent;
  let fixture: ComponentFixture<EclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EclaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
