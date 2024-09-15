import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import SummarizeIcon from "@mui/icons-material/Summarize";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SmsIcon from "@mui/icons-material/Sms";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { ListItem, Typography } from "@mui/material";

const stylesListItemButton = {
	marginTop: "4px",
	borderRadius: "10px",
	backgroundColor: "#283047",
};

const Sidebar = ({ closeAction }: { closeAction: () => void }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [open, setOpen] = useState(false);
	return (
		<Stack
			component="nav"
			direction="column"
			gap="4px"
		>
			<Box
				borderRadius={4}
				padding={1}
				bgcolor="#171d2d"
				color="white"
			>
				<Stack
					padding={2}
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Typography
						fontSize={18}
						padding="0 4px"
						borderRadius={1}
						bgcolor="#297eff"
					>
						ФИН
					</Typography>
					<Typography
						fontSize={18}
						marginRight="auto"
						padding="0 4px"
						borderRadius={1}
					>
						Контроль
					</Typography>
					<Button
						variant="contained"
						size="small"
						endIcon={
							<CloseIcon
								sx={{
									height: 12,
								}}
							/>
						}
						sx={{
							paddingLeft: 2,
							color: "#676e8a",
							height: "20px",
							width: "35px",
							borderRadius: "25px",
							backgroundColor: "#283047",
							"& .MuiButton-endIcon": {
								margin: 0,
							},
						}}
						onClick={closeAction}
					>
						Меню
					</Button>
				</Stack>
				<List
					disablePadding
					aria-label="control folder"
				>
					<ListItemButton
						sx={stylesListItemButton}
						onClick={() => {}}
					>
						<ListItemIcon sx={{ minWidth: "2em" }}>
							<SettingsIcon
								fontSize="small"
								sx={{ color: "white" }}
							/>
						</ListItemIcon>
						<ListItemText primary="Настройки" />
						{open ? (
							<ArrowDropUpIcon sx={{ color: "#676e8a" }} />
						) : (
							<ArrowDropDownIcon sx={{ color: "#676e8a" }} />
						)}
					</ListItemButton>
					<ListItemButton
						sx={stylesListItemButton}
						onClick={() => {}}
					>
						<ListItemIcon sx={{ minWidth: "2em" }}>
							<SaveAsIcon
								fontSize="small"
								sx={{ color: "white" }}
							/>
						</ListItemIcon>
						<ListItemText primary="Внесение данных" />
						{open ? (
							<ArrowDropUpIcon sx={{ color: "#676e8a" }} />
						) : (
							<ArrowDropDownIcon sx={{ color: "#676e8a" }} />
						)}
					</ListItemButton>
					<ListItemButton
						sx={stylesListItemButton}
						onClick={() => {}}
					>
						<ListItemIcon sx={{ minWidth: "2em" }}>
							<SummarizeIcon
								fontSize="small"
								sx={{ color: "white" }}
							/>
						</ListItemIcon>
						<ListItemText primary="Отчеты" />
						{open ? (
							<ArrowDropUpIcon sx={{ color: "#676e8a" }} />
						) : (
							<ArrowDropDownIcon sx={{ color: "#676e8a" }} />
						)}
					</ListItemButton>
					<ListItemButton
						sx={stylesListItemButton}
						onClick={() => {}}
					>
						<ListItemIcon sx={{ minWidth: "2em" }}>
							<FolderCopyIcon
								fontSize="small"
								sx={{ color: "white" }}
							/>
						</ListItemIcon>
						<ListItemText primary="База знаний" />
						{open ? (
							<ArrowDropUpIcon sx={{ color: "#676e8a" }} />
						) : (
							<ArrowDropDownIcon sx={{ color: "#676e8a" }} />
						)}
					</ListItemButton>
				</List>
			</Box>
			<Box
				borderRadius={4}
				paddingX={3}
				paddingY={2}
				bgcolor="#171d2d"
				color="white"
				display="flex"
				flexDirection="column"
				gap={2}
			>
				<Typography fontSize={14}>Техническая поддержка</Typography>
				<Stack
					direction="row"
					justifyContent="space-between"
				>
					<div>
						<Typography
							color="#676e8a"
							fontSize={10}
						>
							Номер поддержки
						</Typography>
						<Typography fontSize={12}>8 (999) 999 99 99</Typography>
					</div>
					<div>
						<Typography
							color="#676e8a"
							fontSize={10}
						>
							Почта поддержки
						</Typography>
						<Typography fontSize={12}>pf1@werthesest.ru</Typography>
					</div>
				</Stack>
				<div>
					<Typography
						color="#676e8a"
						fontSize={10}
					>
						Часы работы
					</Typography>
					<Typography fontSize={12}>Пн-Пт с 9:00 до 19:00 мск</Typography>
				</div>
				<List
					disablePadding
					aria-label="support folder"
				>
					{[
						"Пользовательское соглашение",
						"Политика конфиденциальности",
						"Юридическая информация",
						"Публичная оферта",
					].map((item) => (
						<ListItem
							key={item}
							disableGutters
							disablePadding
							dense
							divider
							sx={{
								borderBottom: "1px solid #283047",
								"&:last-child": {
									border: "none",
								},
							}}
						>
							<ListItemButton
								dense
								disableGutters
							>
								<ListItemText
									primary={item}
									sx={{
										"& .MuiListItemText-primary": {
											color: "#676e8a",
											fontSize: 12,
										},
									}}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
			<Button
				size="large"
				variant="contained"
				startIcon={<SmsIcon />}
				sx={{
					borderRadius: 4,
					padding: 2,
				}}
			>
				Связаться с нами
			</Button>
		</Stack>
	);
};

export default Sidebar;
