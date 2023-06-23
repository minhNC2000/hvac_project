import { ThemeProvider, createTheme } from "@mui/material";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { ToastContainer } from "react-toastify";
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
