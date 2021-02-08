import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaletteDialogComponent } from './create-palette-dialog.component';

describe('CreatePaletteDialogComponent', () => {
  let component: CreatePaletteDialogComponent;
  let fixture: ComponentFixture<CreatePaletteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePaletteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaletteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
