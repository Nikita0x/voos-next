import { Inter, Poppins } from 'next/font/google';
import TheHeader from '@/components/header/TheHeader';
import TheFooter from '@/components/footer/TheFooter';
import './globals.css';
import LocationPopup from '@/components/location/LocationPopup';

const inter = Inter({ subsets: ['latin'] });
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} id="__next">
        <TheHeader></TheHeader>
        {children}
        <TheFooter></TheFooter>
        <LocationPopup></LocationPopup>
      </body>
    </html>
  );
}
