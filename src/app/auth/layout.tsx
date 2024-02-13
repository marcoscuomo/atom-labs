import { Flame } from 'lucide-react'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Atom labs! - Login',
  description: 'Your smart system',
}

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-1 text-lg text-foreground">
          <Flame className="h-6 w-6" />
          <span className="font-semibold tracking-tight">Atom Labs!</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy;atom.labs - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Toaster richColors />
        {children}
      </div>
    </div>
  )
}
