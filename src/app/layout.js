import { Inter,Astloch ,Lobster} from "next/font/google";
import "./globals.css";
import { Roboto_Mono} from 'next/font/google'

const roboto = Roboto_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
const as=Lobster({
  family: ["Lobster Two", "sans-serif"],
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My 3D Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image" href="/vercel.svg"/>
      <body className={as.className}>{children}</body>
    </html>
  );
}
