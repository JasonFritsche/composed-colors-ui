import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsSectionComponent } from './colors-section.component';

describe('ColorsSectionComponent', () => {
  let component: ColorsSectionComponent;
  let fixture: ComponentFixture<ColorsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
