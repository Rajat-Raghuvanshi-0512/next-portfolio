import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/sidebar';

const font = League_Spartan({
  preload: true,
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rajat | Portfolio',
  description:
    'Experienced web developer skilled in crafting, enhancing, and sustaining high-performing, user-centric websites. Proficient in modern technologies and adheres to best design practices. A resourceful problem solver eager to collaborate with a team of like-minded individuals.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="view-transition" content="same-origin" />
      <body className={font.className}>
        <Sidebar />
        <main className="p-2 w-full">{children}</main>
      </body>
    </html>
  );
}
