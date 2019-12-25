import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEngComponent } from './cv-eng.component';

describe('CvEngComponent', () => {
  let component: CvEngComponent;
  let fixture: ComponentFixture<CvEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
