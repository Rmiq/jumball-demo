// import SupabaseProvider from './supabase-provider'

export const metadata = {
  title: 'Jumball',
  description: 'Jumball',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <SupabaseProvider>{children}</SupabaseProvider> */}
        {children}
      </body>
    </html>
  )
}