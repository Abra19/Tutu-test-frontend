export interface Elements {
  bigButton: Element | null;
  smallButton: Element | null;
  tableContainer: Element | null;
};

export interface State {
  sortKey: string;
  sortType: string;
  currentPage: number;
  data: Object[][] | null;
  pageSize: number;
  rows: number;
};

export interface Routes {
    big: string,
    small: string,
}

export type routesKey = 'big' | 'small';
