import Typography from "@mui/material/Typography";
import DescriptionIcon from "@mui/icons-material/Description";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import { Dispatch, useState } from "react";
import { InputTextField, SelectionTextField } from "../theme/styled";
import MenuItem from "@mui/material/MenuItem";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { DataItem } from "../types/types";

interface MainTitleProps {
	handleLoad: () => Promise<void>;
	handleExport: () => void;
	data: DataItem[];
	setData: Dispatch<React.SetStateAction<DataItem[]>>;
	setDataFiltered: Dispatch<React.SetStateAction<DataItem[]>>;
	categories: string[];
}

const MainTitle = ({
	handleLoad,
	handleExport,
	data,
	setData,
	setDataFiltered,
	categories,
}: MainTitleProps) => {
	const [barcodeFilter, setBarCodeFilter] = useState("");
	const [supplierArticleFilter, setSupplierArticleFilter] = useState("");
	const [itemSizeFilter, setItemSizeFilter] = useState("");
	const [categoryFilter, setCategoryFilter] = useState<string>("");

	const handleSetFilter = () => {
		if (!data.length) {
			return;
		}
		const filtered = data.filter((element) => {
			return (
				(!barcodeFilter || element.barcode.includes(barcodeFilter)) &&
				(!supplierArticleFilter ||
					element.supplierArticle.toLowerCase() ===
						supplierArticleFilter.toLowerCase()) &&
				(!itemSizeFilter || element.itemSize === itemSizeFilter) &&
				(!categoryFilter || element.item === categoryFilter)
			);
		});
		setDataFiltered(filtered);
	};
	const handleClearData = () => {
		setBarCodeFilter("");
		setSupplierArticleFilter("");
		setItemSizeFilter("");
		setCategoryFilter("");
		setData([]);
		setDataFiltered([]);
	};

	return (
		<Box
			component="form"
			noValidate
			autoCapitalize="off"
		>
			<Stack
				gap={2}
				direction="row"
				alignItems="center"
			>
				<Typography variant="h4">Остатки сформированы на 01.04.2023</Typography>
				<Button
					variant="contained"
					size="small"
					startIcon={<DescriptionIcon fontSize="small" />}
					sx={{
						height: "30px",
						borderRadius: "25px",
						color: "lightgrey",
						backgroundColor: "#171d2d",
					}}
				>
					Инструкции
				</Button>
			</Stack>
			<Stack
				mt={2}
				gap={2}
				direction="row"
				alignItems="center"
			>
				<InputTextField
					fieldWidth="26ch"
					value={barcodeFilter}
					name="barcodeFilter"
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<Typography>Баркод</Typography>
								</InputAdornment>
							),
							placeholder: "5643242134323099",
						},
					}}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setBarCodeFilter(event.target.value);
					}}
				/>
				<InputTextField
					fieldWidth="30ch"
					value={supplierArticleFilter}
					name="supplierArticleFilter"
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<Typography>Артикул</Typography>
								</InputAdornment>
							),
							placeholder: "ДжЖСинМом0823",
						},
					}}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setSupplierArticleFilter(event.target.value);
					}}
				/>
				<InputTextField
					fieldWidth="13ch"
					value={itemSizeFilter}
					name="itemSizeFilter"
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<Typography>Размер</Typography>
								</InputAdornment>
							),
							placeholder: "44",
						},
					}}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setItemSizeFilter(event.target.value);
					}}
				/>
				<SelectionTextField
					select
					label="Категория"
					id="categoryFilter"
					value={categoryFilter}
					name="categoryFilter"
					variant="filled"
					slotProps={{
						input: {
							disableUnderline: true,
						},
					}}
					onChange={(event) => setCategoryFilter(event.target.value)}
				>
					{categories.map((option) => (
						<MenuItem
							key={option}
							value={option}
						>
							{option}
						</MenuItem>
					))}
				</SelectionTextField>
			</Stack>
			<Stack
				mt={1}
				gap={1}
				direction="row"
			>
				<Button
					size="large"
					variant="contained"
					sx={{
						borderRadius: "25px",
					}}
					onClick={handleSetFilter}
				>
					<Typography>Сформировать</Typography>
				</Button>
				<Button
					size="large"
					variant="contained"
					startIcon={<UnarchiveIcon />}
					sx={{
						borderRadius: "25px",
						color: "lightgrey",
						backgroundColor: "#171d2d",
					}}
					onClick={handleExport}
				>
					Экспорт
				</Button>
			</Stack>
			<Box
				mt={2}
				maxWidth={"82%"}
			>
				<Divider />
				<Stack
					direction="row"
					justifyContent="space-between"
				>
					<Button
						color="inherit"
						startIcon={<DriveFileMoveIcon />}
						onClick={handleLoad}
					>
						<Typography color="#676e8a">Загрузить данные из csv</Typography>
					</Button>
					<Button
						color="inherit"
						startIcon={<CreateNewFolderIcon />}
						sx={{
							marginRight: "auto",
						}}
					>
						<Typography color="#676e8a">Изменить данные</Typography>
					</Button>
					<Divider
						orientation="vertical"
						variant="middle"
						flexItem
					/>
					<Button
						color="inherit"
						endIcon={<CloseIcon />}
						onClick={handleClearData}
					>
						<Typography color="#676e8a">Очистить</Typography>
					</Button>
				</Stack>
				<Divider />
			</Box>
		</Box>
	);
};

export default MainTitle;
