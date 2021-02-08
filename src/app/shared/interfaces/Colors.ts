export interface ColorPalette {
  paletteName: string;
  colors?: Array<any>;
  createdDate?: Date;
  lastEdited?: Date;
  description?: string;
}

export interface Color {
  id?: number;
  alias?: string;
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
