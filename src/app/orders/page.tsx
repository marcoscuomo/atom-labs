import Pagination from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import OrderTableFilters from './order.table-filters'
import OrderTableRow from './order-table-row'

interface odersProps {
  orderId: number
  createdAt: number
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  customerName: string
  total: number
}

const orders: odersProps[] = [
  {
    orderId: 12000,
    createdAt: 1645201223000,
    status: 'pending',
    customerName: 'Alice Smith',
    total: 123.45,
  },
  {
    orderId: 12001,
    createdAt: 1639455623000,
    status: 'delivering',
    customerName: 'Bob Johnson',
    total: 789.12,
  },
  {
    orderId: 12002,
    createdAt: 1646353223000,
    status: 'processing',
    customerName: 'Charlie Williams',
    total: 456.78,
  },
  {
    orderId: 12003,
    createdAt: 1643164423000,
    status: 'delivered',
    customerName: 'David Jones',
    total: 234.56,
  },
  {
    orderId: 12004,
    createdAt: 1638233223000,
    status: 'canceled',
    customerName: 'Emma Brown',
    total: 987.65,
  },
  {
    orderId: 12005,
    createdAt: 1642202023000,
    status: 'pending',
    customerName: 'Frank Davis',
    total: 543.21,
  },
  {
    orderId: 12006,
    createdAt: 1645364423000,
    status: 'processing',
    customerName: 'Grace Miller',
    total: 678.9,
  },
  {
    orderId: 12007,
    createdAt: 1639849223000,
    status: 'delivering',
    customerName: 'Henry Wilson',
    total: 321.09,
  },
  {
    orderId: 12008,
    createdAt: 1642833223000,
    status: 'delivered',
    customerName: 'Ivy Moore',
    total: 876.54,
  },
  {
    orderId: 12009,
    createdAt: 1637119623000,
    status: 'canceled',
    customerName: 'Jack Taylor',
    total: 135.79,
  },
  {
    orderId: 12010,
    createdAt: 1644790023000,
    status: 'pending',
    customerName: 'Alice Smith',
    total: 246.8,
  },
  {
    orderId: 12011,
    createdAt: 1641178023000,
    status: 'delivering',
    customerName: 'Bob Johnson',
    total: 987.65,
  },
  {
    orderId: 12012,
    createdAt: 1638396423000,
    status: 'processing',
    customerName: 'Charlie Williams',
    total: 654.32,
  },
  {
    orderId: 12013,
    createdAt: 1644087623000,
    status: 'delivered',
    customerName: 'David Jones',
    total: 345.67,
  },
  {
    orderId: 12014,
    createdAt: 1642742023000,
    status: 'canceled',
    customerName: 'Emma Brown',
    total: 123.45,
  },
  {
    orderId: 12015,
    createdAt: 1642042823000,
    status: 'processing',
    customerName: 'Frank Davis',
    total: 789.12,
  },
  {
    orderId: 12016,
    createdAt: 1639649223000,
    status: 'delivering',
    customerName: 'Grace Miller',
    total: 456.78,
  },
  {
    orderId: 12017,
    createdAt: 1645531623000,
    status: 'delivered',
    customerName: 'Henry Wilson',
    total: 234.56,
  },
  {
    orderId: 12018,
    createdAt: 1639470023000,
    status: 'canceled',
    customerName: 'Ivy Moore',
    total: 987.65,
  },
  {
    orderId: 12019,
    createdAt: 1643326823000,
    status: 'pending',
    customerName: 'Jack Taylor',
    total: 321.09,
  },
]

export default function Orders() {
  return (
    <div className="flex flex-col gap-4 p-8 pt-6">
      <h1 className="text-3xl font-bold tracking-tighter">Pedidos</h1>
      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.map((order) => {
                return <OrderTableRow key={order.orderId} order={order} />
              })}
            </TableBody>
          </Table>
        </div>

        <Pagination />
      </div>
    </div>
  )
}
