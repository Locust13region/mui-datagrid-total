import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface MainFooterProps {
	availableToOrderSum: number;
	itemsInTransitSum: number;
}
const MainFooter = ({
	availableToOrderSum,
	itemsInTransitSum,
}: MainFooterProps) => {
	console.log(availableToOrderSum, itemsInTransitSum);
	return (
		<Stack
			minHeight="64px"
			direction="row"
			alignItems="center"
			paddingX={1}
			marginTop={1}
			gap="4px"
		>
			<Box
				sx={{
					flexBasis: "72ch",
					height: "100%",
					display: "flex",
					alignItems: "center",
					paddingLeft: "15px",
					backgroundColor: "#f0f1f3",
					borderBottomLeftRadius: "8px",
				}}
			>
				<Typography>Итого:</Typography>
			</Box>
			<Box
				sx={{
					flexBasis: "22ch",
					height: "100%",
					display: "flex",
					alignItems: "center",
					paddingLeft: "15px",
					backgroundColor: "#f0f1f3",
				}}
			>
				<Typography>Сумма</Typography>
			</Box>
			<Box
				sx={{
					flexBasis: "22ch",
					height: "100%",
					display: "flex",
					alignItems: "center",
					paddingLeft: "15px",
					backgroundColor: "#f0f1f3",
				}}
			>
				<Typography>Сумма</Typography>
			</Box>
			<Box
				sx={{
					flexGrow: 1,
					height: "100%",
					display: "flex",
					alignItems: "center",
					paddingLeft: "15px",
					backgroundColor: "#f0f1f3",
					borderBottomRightRadius: "8px",
				}}
			/>
		</Stack>
	);
};

export default MainFooter;
