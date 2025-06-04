import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import StoreProvider from "src/StoreProvider";
import darkTheme from "~config/theme";
import MainLayout from "~screens/layouts/main/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <Toaster position="top-center" />
      </ThemeProvider >
    </StoreProvider>
  )


}
