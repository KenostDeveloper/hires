import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav/Nav";
import Link from "next/link";


const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HiRes Studio — Студия подкастов",
  description: "Студия записи подкастов и интервью в Санкт-Петербурге Hires Studio. Мы предоставляем услуги аренды студии подкастов, аренда интерьерной студии и аренду студии с цветным фоном. Так же проводим съемки подкаста с оператором, съёмки видео-интервью, проводим прямые эфиры на стриминговые площадки.",
  icons: {
    icon: '/logo.svg'
  },
  robots: "index, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
    <head>
      {/* <link
          href="https://blogfonts.com/css/aWQ9MjI5NDAxJnN1Yj00MDEmYz1jJnR0Zj1DeWdyZS1CbGFjay1CRjYzZWVlYmYzOTQyYjIudHRmJm49Y3lncmUtYmxhY2s/Cygre Black.ttf"
          rel="stylesheet" type="text/css"/> */}
          
    </head>
    <body className={oswald.className}>
      {children}
      <footer className="footer">
          <div className="container">
            <div className="footerLeft">
                <p>ИП МЕРЕНКОВ ДЕНИС ИГОРЕВИЧ</p>
                <Link href="#" className="footerLink">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
            </div>
            <p>2024</p>
          </div>
      </footer>
    </body>
    </html>
  );
}
