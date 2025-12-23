import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AnimatedBackground from "../components/AnimatedBackground";
import LaserCursor from "../components/LaserCursor";
import LoadingScreen from "../components/LoadingScreen";
import ClientLayout from "../components/ClientLayout";
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Christoper John Aranda | Full Stack Developer Portfolio",
  description: "Passionate Full Stack Developer specializing in React, Next.js, TypeScript, Laravel, Node.js, and mobile development. Experienced in building enterprise web applications for KPK and various organizations across Indonesia.",
  keywords: ['Full Stack Developer', 'React Developer', 'Next.js', 'TypeScript', 'Laravel', 'Web Development', 'Mobile Development', 'Christoper John Aranda', 'Indonesia Developer', 'KPK Developer'],
  authors: [{ name: 'Christoper John Aranda', url: 'https://christoperjohnaranda.vercel.app' }],
  creator: 'Christoper John Aranda',
  publisher: 'Christoper John Aranda',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://christoperjohnaranda.vercel.app',
    title: 'Christoper John Aranda | Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in React, Next.js, TypeScript, Laravel, and mobile development.',
    siteName: 'Christoper John Portfolio',
    images: [
      {
        url: 'https://christoperjohnaranda.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Christoper John Aranda - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christoper John Aranda | Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in React, Next.js, TypeScript, and Laravel.',
    images: ['https://christoperjohnaranda.vercel.app/og-image.jpg'],
    creator: '@christoperjohn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Enable static rendering
  unstable_setRequestLocale(locale)
  
  // Validate locale
  if (!locales.includes(locale as 'id' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <LoadingScreen />
          <LaserCursor />
          <AnimatedBackground />
          <ClientLayout>
            <div className="relative z-10">
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

