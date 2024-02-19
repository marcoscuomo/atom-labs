import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'

export default function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogHeader>Pedido: 123443</DialogHeader>
        <DialogDescription>Detalhe do pedido</DialogDescription>
      </DialogHeader>
    </DialogContent>
  )
}
