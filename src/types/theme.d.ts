import '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    lightColor?: PaletteColorOptions;
    mediumColor?: PaletteColorOptions;
    darkColor?: PaletteColorOptions;
  }

  interface Palette {
    lightColor: PaletteColor;
    mediumColor:PaletteColor;
    darkColor:PaletteColor;
  }
}

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    section: CSSProperties;
  }
}
