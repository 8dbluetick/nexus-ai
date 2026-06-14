import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Nexus AI - Premium AI Assistant',
    template: '%s | Nexus AI',
  },
  description:
    'Nexus AI is a premium all-in-one AI assistant for academics, research, coding, and productivity. Powered by Google Gemini.',
  keywords: ['AI assistant', 'academic AI', 'coding assistant', 'research tool', 'study helper', 'Gemini AI'],
  authors: [{ name: 'Nexus AI Team' }],
  creator: 'Nexus AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'Nexus AI - Premium AI Assistant',
    description: 'All-in-one AI assistant for academics, research, coding, and productivity.',
    siteName: 'Nexus AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus AI - Premium AI Assistant',
    description: 'All-in-one AI assistant for academics, research, coding, and productivity.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#f97316',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-background`}>
        {children}
      </body>
    </html>
  );
}
