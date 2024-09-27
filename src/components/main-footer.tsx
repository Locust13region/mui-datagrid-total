import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FooterBox } from "../theme/styled";
import { memo } from "react";

interface MainFooterProps {
	availableToOrderSum: number;
	itemsInTransitSum: number;
}
const MainFooter: React.FC<MainFooterProps> = ({
	availableToOrderSum,
	itemsInTransitSum,
}) => {
	return (
		<Stack
			minHeight="64px"
			direction="row"
			alignItems="center"
			paddingX="5px"
			marginTop={1}
			gap="5px"
		>
			<FooterBox
				flexBasis="72ch"
				paddingLeft="20px"
				sx={{
					borderBottomLeftRadius: "8px",
				}}
			>
				<Typography>Итого:</Typography>
			</FooterBox>
			<FooterBox flexBasis="22ch">
				<Typography>{availableToOrderSum}</Typography>
			</FooterBox>
			<FooterBox flexBasis="22ch">
				<Typography>{itemsInTransitSum}</Typography>
			</FooterBox>
			<FooterBox
				flexGrow={1}
				sx={{
					borderBottomRightRadius: "8px",
				}}
			/>
		</Stack>
	);
};

export default memo(MainFooter);
