import Typography from "@mui/material/Typography";
import DescriptionIcon from "@mui/icons-material/Description";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import { memo } from "react";
import { InputTextField, SelectionTextField } from "../theme/styled";
import MenuItem from "@mui/material/MenuItem";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { DataItem } from "../types/types";
import useFilter from "../hooks/filter-hook";

interface MainTitleProps {
	handleLoad: () => Promise<void>;
	handleExport: () => void;
	data: DataItem[];
	setData: React.Dispatch<DataItem[]>;
	setDataFiltered: React.Dispatch<DataItem[]>;
	categories: string[];
}

const MainTitle: React.FC<MainTitleProps> = ({
	handleLoad,
	handleExport,
	data,
	setData,
	setDataFiltered,
	categories,
}) => {
	const {
		barcodeFilter,
		categoryFilter,
		itemSizeFilter,
		supplierArticleFilter,
		setBarCodeFilter,
		setSupplierArticleFilter,
		setItemSizeFilter,
		setCategoryFilter,
		filtered,
	} = useFilter(data);

	const handleSetFilter = () => {
		if (!data.length) {
			return;
		}
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

export default memo(MainTitle);
