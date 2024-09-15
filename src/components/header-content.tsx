import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const HeaderContent = () => {
	return (
		<Box
			display={"flex"}
			justifyContent="space-between"
			gap={1}
			borderRadius={4}
			paddingX={2}
			paddingY={1}
			minWidth={"80%"}
			bgcolor="white"
			minHeight={"64px"}
		>
			<Stack
				gap={1}
				direction="row"
			>
				<Button
					color="inherit"
					startIcon={<AccountCircle />}
					size="large"
				>
					{"Иванов И.И."}
				</Button>
				<Button
					color="primary"
					size="large"
					variant="outlined"
					startIcon={<CalendarMonthIcon />}
					sx={{
						border: "none",
						borderRadius: "15px",
						backgroundColor: "lightblue",
					}}
				>
					{"Тариф до 15.04.2024"}
				</Button>
			</Stack>
			<Stack
				gap={1}
				direction="row"
				alignItems="center"
			>
				<Button
					color="inherit"
					variant="outlined"
					sx={{
						height: "30px",
						borderRadius: "25px",
					}}
				>
					Выйти
				</Button>
				<Button
					variant="contained"
					color="warning"
					size="small"
					endIcon={<ArrowRightAltIcon fontSize="small" />}
					sx={{
						height: "30px",
						borderRadius: "25px",
					}}
				>
					О нас
				</Button>
			</Stack>
		</Box>
	);
};

export default HeaderContent;
