// import SupabaseProvider from './supabase-provider'
import Header from '@/components/header';
import '@/styles/globals.css';

export const metadata = {
  title: 'Jumball',
  description: 'Jumball'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
