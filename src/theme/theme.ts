import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	components: {
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: "black",
					opacity: 0.2,
				},
			},
		},
	},
	typography: {
		button: {
			textTransform: "none",
		},
	},
});
export default theme;
