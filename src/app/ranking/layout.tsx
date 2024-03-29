import Aside from "@/components/aside"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container grid flex-1 gap-12 pt-6 md:grid-cols-[200px_1fr]">
      <Aside items={[]} />
      <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
    </div>
  )
}
