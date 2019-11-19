import theme from "./theme";

export default rsTheme => ({
  ...rsTheme,
  borderRadius: 0,
  colors: {
    ...rsTheme.colors,
    primary25: theme.secondaryColorSoft,
    primary: theme.secondaryColor,
    danger: theme.primaryColor,
    dangerLight: theme.primaryColorSoft
  },
  spacing: {
    baseUnit: 4,
    controlHeight: 32,
    menuGutter: 4
  }
});
