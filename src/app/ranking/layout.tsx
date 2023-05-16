import Aside from '@/components/aside';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] pt-6">
      <Aside items={[]} />
      <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
    </div>
  );
}
