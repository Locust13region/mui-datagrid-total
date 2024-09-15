import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MainTitle from "./components/main-title";
import HeaderContent from "./components/header-content";
import { useState } from "react";
import Sidebar from "./components/sidebar";
import { AppBar, Drawer, Main } from "./theme/styled";
import { DataFilter, DataItem } from "./types/types";
import MainContent from "./components/main-content";

export default function App() {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState<DataItem[]>([]);
	const [categories, setCategories] = useState<string[]>([]);
	const [dataFilter, setDataFilter] = useState<DataFilter>({});

	const handleLoadData = async () => {
		await fetch("/data.json")
			.then((response) => response.json())
			.then((jsonData) => {
				setData(jsonData);
				setCategories(
					Array.from(
						new Set(jsonData.map((item: DataItem) => item.supplierArticle))
					)
				);
			})
			.catch((error) => console.error("Error fetching the JSON data:", error));
	};

	const handleExportData = () => {};

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box
			height="100vh"
			padding={1}
			bgcolor="#eff0f2"
			overflow="hidden"
		>
			<CssBaseline />
			<AppBar
				position="static"
				color="transparent"
				elevation={0}
				open={open}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={[
							{
								mr: 2,
							},
							open && { display: "none" },
						]}
					>
						<MenuIcon />
					</IconButton>
					<HeaderContent />
				</Toolbar>
			</AppBar>
			<Drawer
				variant="persistent"
				anchor="left"
				open={open}
			>
				<Sidebar closeAction={handleDrawerClose} />
			</Drawer>
			<Main open={open}>
				<MainTitle
					handleLoad={handleLoadData}
					handleExport={handleExportData}
					setDataClear={setData}
					setDataFilter={setDataFilter}
					categories={categories}
				/>
				<MainContent
					data={data}
					dataFilter={dataFilter}
				/>
			</Main>
		</Box>
	);
}
