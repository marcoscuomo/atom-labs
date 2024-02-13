import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignUp() {
  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link href="sign-in">Fazer login</Link>
      </Button>

      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Criar conta
          </h1>
          <p className="text-sm text-muted-foreground">
            Seja um parceiro e começe a receber pedidos
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="restanrantName">Nome do restaurante</Label>
            <Input type="text" id="restanrantName" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input type="text" id="managerName" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu email</Label>
            <Input type="email" id="email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Seu celular</Label>
            <Input type="tel" id="phone" />
          </div>

          <Button className="w-full">Finalizar cadastro</Button>

          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao continuar você concorda com nossos{' '}
            <a className="underline underline-offset-4" href="">
              termos de seviço
            </a>{' '}
            e{' '}
            <a className="underline underline-offset-4" href="">
              politica de privacidade
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
