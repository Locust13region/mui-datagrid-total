import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import MuiTextField from "@mui/material/TextField";
export const drawerWidth = 300;

export const Drawer = styled(MuiDrawer)(() => ({
	width: drawerWidth,
	flexShrink: 0,
	"& .MuiDrawer-paper": {
		padding: "8px",
		width: drawerWidth,
		boxSizing: "border-box",
		backgroundColor: "#eff0f2",
		border: "none",
	},
}));

export const Main = styled("div", {
	shouldForwardProp: (prop) => prop !== "open",
})<{
	open?: boolean;
}>(({ theme }) => ({
	flexGrow: 1,
	display: "flex",
	flexDirection: "column",
	overflow: "hidden",
	padding: theme.spacing(4, 1, 0, 3),
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	variants: [
		{
			props: ({ open }) => open,
			style: {
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: `${drawerWidth}px`,
				transition: theme.transitions.create(["margin", "width"], {
					easing: theme.transitions.easing.easeOut,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
		},
	],
}));

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	variants: [
		{
			props: ({ open }) => open,
			style: {
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: `${drawerWidth}px`,
				transition: theme.transitions.create(["margin", "width"], {
					easing: theme.transitions.easing.easeOut,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
		},
	],
}));

interface InputTextFieldProps {
	fieldWidth?: string;
}
export const InputTextField = styled(MuiTextField, {
	shouldForwardProp: (prop) => prop !== "fieldWidth",
})<InputTextFieldProps>(({ fieldWidth }) => ({
	width: fieldWidth || "15ch",
	"& .MuiOutlinedInput-root": {
		fontSize: 14,
		borderRadius: "15px",
		backgroundColor: "white",
		padding: "6px 10px",
	},
	"& .MuiOutlinedInput-input": {
		padding: "10px 10px",
		borderRadius: "15px",
		backgroundColor: "#f1f1f1",
	},
	"& fieldset": {
		border: "none",
	},
	"& .MuiInputAdornment-root": {
		"& .MuiTypography-root": {
			fontSize: 14,
			fontWeight: 500,
		},
	},
}));
export const SelectionTextField = styled(MuiTextField)(() => ({
	minWidth: "15ch",
	maxWidth: "15ch",
	"& .MuiFilledInput-root": {
		fontSize: 14,
		borderRadius: "15px",
		backgroundColor: "white",
		padding: "10px 8px 0 0px",
	},
	"& .MuiSelect-select": {
		padding: "17px 0 5px 10px",
	},
	"& .MuiSelect-icon": {
		top: "auto",
		bottom: 3,
	},
}));
