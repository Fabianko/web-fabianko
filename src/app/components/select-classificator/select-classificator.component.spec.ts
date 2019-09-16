import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClassificatorComponent } from './select-classificator.component';

describe('SelectClassificatorComponent', () => {
  let component: SelectClassificatorComponent;
  let fixture: ComponentFixture<SelectClassificatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectClassificatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectClassificatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
