export interface CafeListType {
	cafeList: Cafe[];
}

export interface Cafe {
	cafe_id: number;
	name: string;
}

export interface FilteredCafeListType {
	filteredCafeList: Cafe[] | null[];
}
