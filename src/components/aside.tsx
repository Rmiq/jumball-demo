'use client'

import { twMerge } from "tailwind-merge";
import { Icons } from "@/components/icons"
import { usePathname } from "next/navigation";
import Link from "next/link";
const Aside = ({ items }: { items: any }) => {

  const path = usePathname()

  return (
    <aside className="hidden w-[200px] flex-col md:flex">
      <nav className="grid items-start gap-2">
        {items.map((item : any, index: any) => {
          const Icon = Icons["arrowRight"]
          return (
            item.href && (
              <Link key={index} href={item.href}>
                <span
                  className={twMerge(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    path === item.href ? "bg-accent" : "transparent",
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </span>
              </Link>
            )
          )
        })}
      </nav>
    </aside>)
}

export default Aside;