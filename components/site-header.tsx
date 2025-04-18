"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, Search, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "@/components/theme-provider"

export function SiteHeader() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [showSearch, setShowSearch] = useState(false)

  const routes = [
    {
      href: "/",
      label: "الرئيسية",
      active: pathname === "/",
    },
    {
      href: "/cities",
      label: "المدن السياحية",
      active: pathname === "/cities" || pathname.startsWith("/cities/"),
    },
    {
      href: "/heritage",
      label: "المواقع التراثية",
      active: pathname === "/heritage" || pathname.startsWith("/heritage/"),
    },
    {
      href: "/events",
      label: "الفعاليات",
      active: pathname === "/events" || pathname.startsWith("/events/"),
    },
    {
      href: "/services",
      label: "الخدمات السياحية",
      active: pathname === "/services",
    },
    {
      href: "/ai-guide",
      label: "المرشد الذكي",
      active: pathname === "/ai-guide",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="px-7">
                <Link href="/" className="flex items-center">
                  <span className="font-heading text-xl font-bold">المرشد السياحي</span>
                </Link>
                <nav className="mt-8 flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-lg font-medium ${
                        route.active ? "text-primary" : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center gap-2 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <span className="font-heading text-xl font-bold">المرشد السياحي</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium ${
                  route.active ? "text-primary" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          {showSearch ? (
            <div className="relative">
              <Input
                placeholder="ابحث هنا..."
                className="w-[200px] md:w-[300px] pl-8"
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">بحث</span>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            aria-label="تبديل الوضع المظلم"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">تبديل الوضع المظلم</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
