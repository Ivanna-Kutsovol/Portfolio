import { Header } from "@/components/layout/header/header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./styles/App.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
