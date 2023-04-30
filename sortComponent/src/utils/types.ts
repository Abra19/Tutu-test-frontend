export type routesKey = 'big' | 'small';
export interface Elements {
	bigButton: Element | null
	smallButton: Element | null
	tableContainer: Element | null
}

export interface State {
	sortKey: string
	sortType: string
	currentPage: number
	data: object[] | null
	allData: object[] | null
	pageSize: number
	rows: number
	key: routesKey
}

export interface Routes {
	big: string
	small: string
}

