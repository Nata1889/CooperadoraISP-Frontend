import "./globals.css";
import Link from "next/link";
import RutMenuComponent from "@/components/Rut.menu";

export const metadata = {
  title: "Cooperadora ISP 20 | San Justo",
  description: "Sistema de gestión de cooperadora",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <RutMenuComponent/>
        <div className="layout-wrapper">
        {children}
        </div>
      </body>
    </html>
  );
}
