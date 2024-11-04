import './globals.css';
import type { Metadata } from 'next';
import { vazirmatn } from './fonts';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'وب‌سایت شخصی سیدمحمدرضا موسوی‌نژاد',
  description: 'پژوهشگر جنگ، مدرس و نویسنده ۲۳ جلد کتاب در ادبیات پایداری مقدس',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="min-h-screen bg-background font-vazirmatn">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}