type SimpleDate = {
  y: number;
  m: number;
  d: number;
};

type Holidays = {
  [key: string]: string;
};

type Color = {
  hex: string;
  name: string;
};

interface IndexedProps {
  index: number;
}

interface HolidaysMap {
  [key: string]: Holidays;
}
