export interface itemSuggestion {
  id: number;
  title: string;
  image: string;
}

export interface productsItem {
  _id: any;
  title: string;
  image: string;
  price: number;
}

export interface blogsItem {
  id: number;
  title: string;
  timeOfRead: string;
  image: string;
}

export interface cartProduct {
  id: number;
  price: number;
  title: string;
  image: string;
}

export interface orders {
  id: number;
  uid: string;
  dates: string;
  status: string;
  price: number;
  deliveryNumber: string;
}

export interface general {
  SP: string;
  MN: string;
  SM: string;
  CONF: string;
  UP: string;
  UC: string;
}

export interface product {
  FM: string;
  FT: string;
  AH: string;
  MLC: number;
  OM: string;
}

export interface dimensions {
  W: number;
  H: number;
  D: number;
  WG: number;
  SH: number;
  LG: number;
}
export interface warranty {
  WS: string;
  WST: string;
  CW: string;
  NCW: string;
  DM: string;
}
