import { DataFilter, DataItem } from "../types/types";

interface MainContentProps {
	data: DataItem[];
	dataFilter: DataFilter;
}

const MainContent = ({ data, dataFilter }: MainContentProps) => {
	console.log(data);
	console.log(dataFilter);
	return <div></div>;
};

export default MainContent;
