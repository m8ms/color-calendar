import Select from "react-select";
import React from "react";
import theme from "../styles/theme";

const reactSelectTheme = rsTheme => ({
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

export default props => <Select theme={reactSelectTheme} {...props} />;
