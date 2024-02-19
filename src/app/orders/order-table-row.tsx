import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'

import OrderStatus from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import OrderDetails from './order-details'

export interface OrderTableRowProps {
  order: {
    orderId: number
    createdAt: number
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    // status: string
    customerName: string
    total: number
  }
}

export default function OrderTableRow({ order }: OrderTableRowProps) {
  return (
    <>
      <TableRow>
        {/* Detalhe do pedido */}
        <TableCell>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="xs">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
              </Button>
            </DialogTrigger>
            <OrderDetails />
          </Dialog>
        </TableCell>
        {/* Id do pedido */}
        <TableCell className="font-mono text-xs font-medium">
          {order.orderId}
        </TableCell>

        {/* Data de criação do pedido */}
        <TableCell className="text-muted-foreground">
          {formatDistanceToNow(order.createdAt, {
            locale: ptBR,
            addSuffix: true,
          })}
        </TableCell>

        {/* Status do pedido */}
        <TableCell>
          <OrderStatus status={order.status} />
        </TableCell>

        {/* Nome do cliente */}
        <TableCell className="font-medium">{order.customerName}</TableCell>

        {/* Valor do pedido */}
        <TableCell className="font-medium">
          {order.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </TableCell>

        {/* Ações do pedido */}
        <TableCell>
          {order.status === 'pending' && (
            <Button variant="outline" size="xs">
              <ArrowRight className="mr-2 h-3 w-3" />
              Aprovar
            </Button>
          )}

          {order.status === 'processing' && (
            <Button variant="outline" size="xs">
              <ArrowRight className="mr-2 h-3 w-3" />
              Em Entrega
            </Button>
          )}

          {order.status === 'delivering' && (
            <Button variant="outline" size="xs">
              <ArrowRight className="mr-2 h-3 w-3" />
              Entregue
            </Button>
          )}
        </TableCell>
        <TableCell>
          <Button
            disabled={!['disabled', 'processing'].includes(order.status)}
            variant="outline"
            size="xs"
          >
            <X className="mr-2 h-3 w-3" />
            Cancelar
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}
