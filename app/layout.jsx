import "@/styles/globals.css";
import  '@/styles/layout.css'
import { freepixel } from '@/ui/fonts'

export const metadata = {
  title: "LICH 1257",
  description: "multimedia artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={freepixel.className}>{children}
        {/* <video autoPlay muted loop className="backgroundVideo">
          <source src="/assets/bg2.mp4" type="video/mp4" />
        </video> */}
      </body>
    </html>
  );
}