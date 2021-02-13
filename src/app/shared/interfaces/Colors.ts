export interface ColorPalette {
  id?: number;
  paletteName: string;
  colors?: Array<any>;
  createdDate?: Date;
  lastEdited?: Date;
  description?: string;
}

export interface Color {
  id?: number;
  colorName?: string;
  hsva: {
    alpha: number;
    hue: number;
    saturation: number;
    value: number;
  };
  rgba: {
    alpha: number;
    blue: number;
    green: number;
    red: number;
  };
}

export interface SelectedColor {
  index?: number;
  isColorSelected: boolean;
  selectedColor?: Color;
}
