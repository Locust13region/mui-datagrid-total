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
import { DataItem } from "./types/types";
import MainContent from "./components/main-content";

export default function App() {
	const [open, setOpen] = useState<boolean>(false);
	const [data, setData] = useState<DataItem[]>([]);
	const [categories, setCategories] = useState<string[]>([]);
	const [dataFiltered, setDataFiltered] = useState<DataItem[]>([]);

	const handleLoadData = async () => {
		await fetch("/data.json")
			.then((response) => response.json())
			.then((jsonData) => {
				setData(jsonData);
				setCategories(
					Array.from(new Set(jsonData.map((item: DataItem) => item.item)))
				);
			})
			.catch((error) => console.error("Error fetching the JSON data:", error));
	};

	const handleExportData = async () => {
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
			display="flex"
			flexDirection="column"
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
					data={data}
					setData={setData}
					setDataFiltered={setDataFiltered}
					categories={categories}
				/>
				<MainContent data={dataFiltered.length ? dataFiltered : data} />
			</Main>
		</Box>
	);
}
