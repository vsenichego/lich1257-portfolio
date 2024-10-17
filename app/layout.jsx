import "@/styles/globals.css";
import '@/styles/layout.css'
import { freepixel } from '@/ui/fonts'
import { MainNavigation } from '@/ui/navigation/MainNavigation';

export const metadata = {
  title: {
    template: 'lich 1257 / %s',
    default: 'lich 1257',
    description: "multimedia artist",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={freepixel.className}>
        {children}
        {/* <video autoPlay muted loop className="backgroundVideo">
          <source src="/assets/background.mp4" type="video/mp4" />
        </video> */}
        <div className="absolute top-0 right-0 w-full">
          <MainNavigation />
        </div>
      </body>
    </html>
  );
}