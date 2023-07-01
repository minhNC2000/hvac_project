import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { ToastContainer } from "react-toastify";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 922,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  );
}

export default App;
