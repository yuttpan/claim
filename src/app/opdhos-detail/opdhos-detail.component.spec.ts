import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdhosDetailComponent } from './opdhos-detail.component';

describe('OpdhosDetailComponent', () => {
  let component: OpdhosDetailComponent;
  let fixture: ComponentFixture<OpdhosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdhosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdhosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
