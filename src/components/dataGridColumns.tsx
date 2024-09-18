import { GridColDef } from "@mui/x-data-grid";
import { DataItem } from "../types/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

export const columns: GridColDef<DataItem>[] = [
	{ field: "barcode", headerName: "Баркод", width: 150, sortable: true },
	{ field: "item", headerName: "Предмет", width: 110, sortable: true },
	{
		field: "supplierArticle",
		headerName: "Артикул поставщика",
		width: 200,
		sortable: true,
	},
	{
		field: "itemSize",
		headerName: "Размер",
		width: 110,
		sortable: true,
	},
	{
		field: "availableToOrder",
		headerName: "Доступно к заказу",
		type: "number",
		width: 180,
		sortable: true,
		editable: true,
		description: "Редактируемый столбец. Только цифры.",
		valueParser: (value) => {
			const parsedValue = Number(value);
			return isNaN(parsedValue) ? 0 : parsedValue;
		},
	},
	{
		field: "itemsInTransit",
		type: "number",
		width: 180,
		sortable: true,
		editable: true,
		description: "Редактируемый столбец. Только цифры.",
		valueParser: (value) => {
			const parsedValue = Number(value);
			return isNaN(parsedValue) ? 0 : parsedValue;
		},
		renderHeader: (params) => (
			<Tooltip title={params.colDef.description}>
				<Box>
					<Typography
						variant="body2"
						sx={{ fontWeight: 500 }}
					>
						Товары в пути
					</Typography>
					<Typography
						variant="caption"
						sx={{ color: "gray" }}
					>
						(заказы и возвраты)
					</Typography>
				</Box>
			</Tooltip>
		),
	},
	{
		field: "totalItems",
		headerName: "Итого кол-во товаров",
		type: "number",
		width: 200,
		sortable: true,
	},
	{
		field: "warehouse",
		headerName: "Склад",
		width: 100,
		sortable: true,
	},
	{
		field: "deliveryTimeDays",
		type: "number",
		width: 150,
		sortable: true,
		renderHeader: () => (
			<Box>
				<Typography
					variant="body2"
					sx={{ fontWeight: 500 }}
				>
					Срок доставки
				</Typography>
				<Typography
					variant="caption"
					sx={{ color: "gray" }}
				>
					(дней)
				</Typography>
			</Box>
		),
	},
];
