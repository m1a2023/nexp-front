import { Inter } from "next/font/google";
import "./assets/globals.css";
import { Sidebar } from "./components/sidebar";
import { TemplateAbsoluteButton } from "./components/absoluteButton";
import styles from "./assets/page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.generalPage}>{children}</div>
        <TemplateAbsoluteButton styles={styles} />
        {/*<AllMoneyBoxTemplate styles={styles} />*/}
      </body>
    </html>
  );
}
