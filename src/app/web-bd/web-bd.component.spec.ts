import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBdComponent } from './web-bd.component';

describe('WebBdComponent', () => {
  let component: WebBdComponent;
  let fixture: ComponentFixture<WebBdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebBdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
