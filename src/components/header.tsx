'use client'

import Link from "next/link";

const Header = () => {

  const items = [{
    href: '/tournaments/1/about',
    title: 'Tournaments'
  },
  {
    href: '/ranking',
    title: 'Ranking'
  }
  ];

  return (
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex ml-8">
              <span className="hidden font-bold sm:inline-block">
                Jumball
              </span>
            </Link>
            {items?.length ? (
              <nav className="hidden gap-6 md:flex">
                {items?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={"flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            ) : null}
          </div>
        </div>
      </header>
  )
}

export default Header;