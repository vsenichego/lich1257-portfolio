import "./globals.css";
import { pixeloperator } from '@/lib/fonts'

export const metadata = {
  title: "LICH 1257",
  description: "multimedia artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pixeloperator.className}>{children}</body>
    </html>
  );
}
