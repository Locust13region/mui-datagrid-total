import Box from "@mui/material/Box";
import { DataItem } from "../types/types";
import { columns } from "./dataGridColumns";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { GridSortDirection } from "@mui/x-data-grid/models";
import { Dispatch, useCallback, useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertProps } from "@mui/material/Alert";
import MainFooter from "./main-footer";

interface GridColumnUnsortedIconProps extends SvgIconProps {
	sortingOrder: GridSortDirection[];
}
const UnsortedIcon = (props: GridColumnUnsortedIconProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { sortingOrder, ...other } = props;
	return <KeyboardArrowDownIcon {...other} />;
};
interface MainContentProps {
	data: DataItem[];
	dataFiltered: DataItem[];
	setData: Dispatch<React.SetStateAction<DataItem[]>>;
	setDataFiltered: Dispatch<React.SetStateAction<DataItem[]>>;
}

const MainContent = ({
	data,
	dataFiltered,
	setData,
	setDataFiltered,
}: MainContentProps) => {
	const currentData = dataFiltered.length ? dataFiltered : data;

	const [snackbar, setSnackbar] = useState<Pick<
		AlertProps,
		"children" | "severity"
	> | null>(null);

	const [availableToOrderSum, setAvailableToOrderSum] = useState<number>(0);
	const [itemsInTransitSum, setItemsInTransitSum] = useState<number>(0);

	useEffect(() => {
		const totalAvailableToOrder = currentData.reduce(
			(acc, row) => acc + row.availableToOrder,
			0
		);
		const totalItemsInTransit = currentData.reduce(
			(acc, row) => acc + row.itemsInTransit,
			0
		);
		console.log(totalAvailableToOrder);
		setAvailableToOrderSum(totalAvailableToOrder);
		setItemsInTransitSum(totalItemsInTransit);
	}, [currentData]);

	const handleProcessRowUpdate = useCallback(
		(newRow: DataItem, oldRow: DataItem) => {
			setData(
				data.map((row) => (row.barcode === oldRow.barcode ? newRow : row))
			);
			if (dataFiltered.length) {
				setDataFiltered(
					dataFiltered.map((row) =>
						row.barcode === oldRow.barcode ? newRow : row
					)
				);
			}
			return newRow;
		},
		[data, dataFiltered, setData, setDataFiltered]
	);

	const handleProcessRowUpdateError = useCallback((error: Error) => {
		setSnackbar({ children: error.message, severity: "error" });
	}, []);
	const handleCloseSnackbar = () => setSnackbar(null);

	return (
		<Box
			mt="20px"
			flexGrow={1}
			overflow="hidden"
			width="100%"
		>
			<DataGrid
				rows={currentData}
				columns={columns}
				columnHeaderHeight={90}
				disableVirtualization
				getRowId={(row) => row.barcode}
				disableColumnMenu
				disableColumnResize
				hideFooterPagination
				hideFooterSelectedRowCount
				slots={{
					columnUnsortedIcon: UnsortedIcon,
					columnSortedAscendingIcon: ArrowDropUpIcon,
					columnSortedDescendingIcon: ArrowDropDownIcon,
					footer: MainFooter,
				}}
				// slotProps={{ footer: { param1: 10, param2: 20 } }}
				getRowClassName={(params) =>
					params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"
				}
				processRowUpdate={handleProcessRowUpdate}
				onProcessRowUpdateError={handleProcessRowUpdateError}
				initialState={{
					filter: {
						// filterModel: {},
					},
				}}
				sx={{
					flexGrow: 1,
					overflow: "auto",
					borderRadius: "12px",
					padding: "5px 5px",
					backgroundColor: "#FFF",
					border: "none",
					"& .MuiDataGrid-columnHeader ": {
						borderBottom: "none !important",
					},
					"& .MuiDataGrid-filler ": {
						borderBottom: "none !important",
					},
					"& .MuiDataGrid-columnHeader:focus-within": {
						outline: "none",
					},
					"& .MuiDataGrid-columnHeaderTitleContainer": {
						flexDirection: "row !important",
					},
					"& .MuiDataGrid-iconSeparator": {
						display: "none",
					},
					"& .MuiDataGrid-iconButtonContainer": {
						visibility: "visible !important",
					},
					".MuiDataGrid-sortIcon": {
						opacity: "1 !important",
						color: "#297eff",
					},
					"& .MuiDataGrid-virtualScrollerRenderZone": {
						gap: "2px",
					},
					"& .MuiDataGrid-row:hover, .MuiDataGrid-row.Mui-selected, .MuiDataGrid-row.Mui-selected:hover":
						{
							backgroundColor: "transparent",
						},
					"& .MuiDataGrid-row": {
						gap: "5px",
					},
					"& .odd-row .MuiDataGrid-cell": {
						backgroundColor: "#fafcfb",
					},
					"& .even-row .MuiDataGrid-cell": {
						backgroundColor: "#f0f1f3",
					},
					"& .odd-row .MuiDataGrid-cell:nth-of-type(2), .even-row .MuiDataGrid-cell:nth-of-type(2)":
						{
							borderTopLeftRadius: "8px",
							borderBottomLeftRadius: "8px",
						},
					"& .odd-row .MuiDataGrid-cell:nth-last-of-type(2), .even-row .MuiDataGrid-cell:nth-last-of-type(2)":
						{
							borderTopRightRadius: "8px",
							borderBottomRightRadius: "8px",
						},
					"& .MuiDataGrid-cell": {
						border: "none",
						textAlign: "left",
						backgroundColor: "",
					},

					"& ::-webkit-scrollbar": {
						scrollbarWidth: "thin",
						width: "8px",
						height: "8px",
					},
					"& ::-webkit-scrollbar-thumb": {
						borderRadius: "10px",
						backgroundColor: "#297eff",
					},
					"& .MuiDataGrid-scrollbar": {},
					"& .MuiDataGrid-scrollbar--horizontal": {
						left: "14px",
						width: "81%",
						top: "0px",
						"&::-webkit-scrollbar-track": {
							borderRadius: "10px",
							backgroundColor: "#eff0f2",
						},
					},
					"& .MuiDataGrid-scrollbar--vertical": {
						"&::-webkit-scrollbar-track": {
							borderRadius: "10px",
							backgroundColor: "#fff",
						},
					},
					"& .MuiDataGrid-root": {
						scrollbarWidth: "thin",
						scrollbarColor: "#297eff #eff0f2",
					},
					"& .MuiDataGrid-root::-webkit-scrollbar-thumb": {
						backgroundColor: "#297eff",
						borderRadius: "10px",
					},
					"& .MuiDataGrid-root::-webkit-scrollbar-track": {
						backgroundColor: "#eff0f2",
						borderRadius: "10px",
					},
				}}
			/>
			{!!snackbar && (
				<Snackbar
					open
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
					onClose={handleCloseSnackbar}
					autoHideDuration={6000}
				>
					<Alert
						{...snackbar}
						onClose={handleCloseSnackbar}
					/>
				</Snackbar>
			)}
		</Box>
	);
};

export default MainContent;
