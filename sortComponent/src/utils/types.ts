export type routesKey = 'big' | 'small';
export type headerKeys = {
	name:string
	originalName: string
}
export interface Elements {
	bigButton: Element | null
	smallButton: Element | null
	findContainer: Element | null
	tableContainer: Element | null
}

export interface State {
	currentPage: number
	allData: object[] | null
	copyData: object[] | null
	columns: string[] | null
	pageSize: number
	rows: number
	key: routesKey
	directions: any
	linkClasses: any
	sortedFields: string[]
}

export interface Routes {
	big: string
	small: string
}

