type Holidays = {
  [key: string]: string;
};

type Folk = {
  id: string;
  name: string;
  colors: { [key: string]: Color } | null;
};

type Color = {
  hex: string;
  name: string;
};

type SelectOption = {
  value: string | number;
  label: string;
};

interface IndexedProps {
  index: number;
}

interface HolidaysMap {
  [key: string]: Holidays;
}

interface FolksMap {
  [key: string]: Folk;
}
