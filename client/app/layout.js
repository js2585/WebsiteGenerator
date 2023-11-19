import "./globals.css";

import {ClerkProvider} from "@clerk/nextjs";

import CustomTheme from "./theme";

export const metadata = {
  title : "Create Next App",
  description : "Generated by create next app",
};

export default function RootLayout({children}) {
  return (<ClerkProvider><html lang = "en"><CustomTheme><body>{
      children}</body>
        </CustomTheme></html>
    </ClerkProvider>);
}
