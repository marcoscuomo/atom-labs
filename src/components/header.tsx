import { Flame, Home, UtensilsCrossed } from 'lucide-react'
import Link from 'next/link'

import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Flame className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4">
          <Link href="/" className="flex items-center gap-1 text-sm">
            <Home className="h-4 w-4" />
            Inicio
          </Link>

          <Link href="pedidos" className="flex items-center gap-1 text-sm">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          {/* Config */}
        </div>
      </div>
    </div>
  )
}
