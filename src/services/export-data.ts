import { DataItem } from "../types/types";

export const exportData = (data: DataItem[]) => {
	if (!data.length) {
		return;
	}
	const jsonString = JSON.stringify(data, null, 2);

	const blob = new Blob([jsonString], { type: "application/json" });

	const link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "data.json";
	link.click();
	URL.revokeObjectURL(link.href);
};
