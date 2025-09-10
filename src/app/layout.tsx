import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'Aluminium Gates & Windows',
  description: 'High-quality aluminium gates and windows for your home and business.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}