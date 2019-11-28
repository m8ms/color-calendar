type Holidays = {
  [key: string]: string;
};

type Folk = {
  id: string;
  name: string;
  colors: { [key: string]: Color } | null;
};

type RawFolk = {
  _id: string;
  name: string;
  colors: { [key: string]: Color } | null;
};

type Color = {
  id: string;
  hex: string;
  name: string;
};

type RawData = {
  _id: string;
};

type RawColor = {
  _id: string;
  hex: string;
  name: string;
};

type ColorMap = {
  [key: string]: Color;
};

type SelectOption = {
  value: string | number;
  label: string;
};

type IndexedProps = {
  index: number;
};

type HolidaysMap = {
  [key: string]: Holidays;
};

type FolksMap = {
  [key: string]: Folk;
};

type ColorsPerFolkMap = {
  [key: string]: ColorMap;
};
