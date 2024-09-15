export interface DataFilter {
	barCodeFilter?: string;
	supplierArticleFilter?: string;
	itemSizeFilter?: string;
	categoryFilter?: string;
}
export interface DataItem {
	barcode: string;
	item: string;
	supplierArticle: string;
	itemSize: string;
	availableToOrder: number;
	itemsInTransit: number;
	totalItems: number;
	warehouse: string;
	deliveryTimeDays: number;
}
