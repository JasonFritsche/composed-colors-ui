import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsDisplayComponent } from './colors-display.component';

describe('ColorsDisplayComponent', () => {
  let component: ColorsDisplayComponent;
  let fixture: ComponentFixture<ColorsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
