import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MainTitle from "./components/main-title";
import HeaderContent from "./components/header-content";
import { useCallback, useState } from "react";
import Sidebar from "./components/sidebar";
import { AppBar, Drawer, Main } from "./theme/styled";
import MainContent from "./components/main-content";
import useData from "./hooks/data-hook";
import { exportData } from "./services/export-data";

export default function App() {
	const [open, setOpen] = useState<boolean>(false);
	const {
		data,
		categories,
		dataFiltered,
		handleSetData,
		handleSetDataFiltered,
		loadData,
	} = useData();

	const callbacks = {
		handleExportData: useCallback(() => exportData(data), [data]),
		handleDrawerOpen: useCallback(() => setOpen(true), []),
		handleDrawerClose: useCallback(() => setOpen(false), []),
	};

	return (
		<Box
			height="100vh"
			padding={1}
			bgcolor="#eff0f2"
			display="flex"
			flexDirection="column"
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
						onClick={callbacks.handleDrawerOpen}
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
				<Sidebar closeAction={callbacks.handleDrawerClose} />
			</Drawer>
			<Main open={open}>
				<MainTitle
					handleLoad={loadData}
					handleExport={callbacks.handleExportData}
					data={data}
					setData={handleSetData}
					setDataFiltered={handleSetDataFiltered}
					categories={categories}
				/>
				<MainContent
					data={data}
					dataFiltered={dataFiltered}
					setData={handleSetData}
					setDataFiltered={handleSetDataFiltered}
				/>
			</Main>
		</Box>
	);
}
