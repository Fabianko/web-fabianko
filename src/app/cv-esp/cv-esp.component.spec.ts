import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEspComponent } from './cv-esp.component';

describe('CvEspComponent', () => {
  let component: CvEspComponent;
  let fixture: ComponentFixture<CvEspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvEspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
