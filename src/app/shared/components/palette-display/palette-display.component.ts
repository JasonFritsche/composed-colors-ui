<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Color, ColorPalette } from '../../interfaces/Colors';
>>>>>>> main

@Component({
  selector: 'app-palette-display',
  templateUrl: './palette-display.component.html',
<<<<<<< HEAD
  styleUrls: ['./palette-display.component.scss']
})
export class PaletteDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
  styleUrls: ['./palette-display.component.scss'],
})
export class PaletteDisplayComponent implements OnInit {
  @Input() colorPalettes: Array<ColorPalette> = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {}
>>>>>>> main
}
