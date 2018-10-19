import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismsComponent } from './prisms.component';

describe('PrismsComponent', () => {
  let component: PrismsComponent;
  let fixture: ComponentFixture<PrismsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
