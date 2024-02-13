'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export default function SignUp() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignup(data: SignUpForm) {
    try {
      toast.success('Restaurante cadastrado com sucesso', {
        action: {
          label: 'Login',
          onClick: () => router.push(`sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar o restaurante')
    }
  }

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

        <form className="space-y-4" onSubmit={handleSubmit(handleSignup)}>
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do restaurante</Label>
            <Input
              type="text"
              id="restaurantName"
              {...register('restaurantName')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input type="text" id="managerName" {...register('managerName')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu email</Label>
            <Input type="email" id="email" {...register('email')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Seu celular</Label>
            <Input type="tel" id="phone" {...register('phone')} />
          </div>

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Finalizar cadastro
          </Button>

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
