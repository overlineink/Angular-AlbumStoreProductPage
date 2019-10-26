import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtoductListComponent } from './ptoduct-list.component';

describe('PtoductListComponent', () => {
  let component: PtoductListComponent;
  let fixture: ComponentFixture<PtoductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtoductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtoductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
