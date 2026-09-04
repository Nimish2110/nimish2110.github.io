import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nimish Nirmal — Game QA Tester | Game Development',
  description: 'Cinematic portfolio of Nimish Nirmal — Game QA Tester and Game Developer.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="noise">{children}</body></html>;
}
