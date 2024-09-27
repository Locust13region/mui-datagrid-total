import { useMemo, useState } from "react";
import { DataItem } from "../types/types";

const useFilter = (data: DataItem[]) => {
	const [barcodeFilter, setBarCodeFilter] = useState("");
	const [supplierArticleFilter, setSupplierArticleFilter] = useState("");
	const [itemSizeFilter, setItemSizeFilter] = useState("");
	const [categoryFilter, setCategoryFilter] = useState("");

	const filtered = useMemo(() => {
		return data.filter((element) => {
			return (
				(!barcodeFilter || element.barcode.includes(barcodeFilter)) &&
				(!supplierArticleFilter ||
					element.supplierArticle.toLowerCase() ===
						supplierArticleFilter.toLowerCase()) &&
				(!itemSizeFilter || element.itemSize === itemSizeFilter) &&
				(!categoryFilter || element.item === categoryFilter)
			);
		});
	}, [
		barcodeFilter,
		categoryFilter,
		data,
		itemSizeFilter,
		supplierArticleFilter,
	]);

	return {
		barcodeFilter,
		categoryFilter,
		itemSizeFilter,
		supplierArticleFilter,
		setBarCodeFilter,
		setSupplierArticleFilter,
		setItemSizeFilter,
		setCategoryFilter,
		filtered,
	};
};
export default useFilter;
