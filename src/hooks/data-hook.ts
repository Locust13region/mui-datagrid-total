import { useCallback, useState } from "react";
import { DataItem } from "../types/types";

const useData = () => {
	const [data, setData] = useState<DataItem[]>([]);
	const [dataFiltered, setDataFiltered] = useState<DataItem[]>([]);
	const [categories, setCategories] = useState<string[]>([]);

	const loadData = useCallback(async () => {
		try {
			const response = await fetch("/data.json");
			const jsonData = await response.json();
			setData(jsonData);
			setCategories(
				Array.from(new Set(jsonData.map((item: DataItem) => item.item)))
			);
		} catch (error) {
			console.error("Error fetching the JSON data:", error);
		}
	}, []);

	const handleSetData: React.Dispatch<DataItem[]> = useCallback(
		(data) => setData(data),
		[]
	);
	const handleSetDataFiltered: React.Dispatch<DataItem[]> = useCallback(
		(data) => setDataFiltered(data),
		[]
	);

	return {
		data,
		categories,
		dataFiltered,
		handleSetData,
		handleSetDataFiltered,
		loadData,
	};
};

export default useData;
