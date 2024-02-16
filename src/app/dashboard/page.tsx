import DayOrdersAmountCard from './day-orders-amount-card'
import MonthCanceldOrdersCard from './month-canceled-orders-amount-card'
import MonthOrdersAmountCard from './month-orders-amount-card'
import MonthRevenueCard from './month-revenue-card'
import PopularProductsChart from './popular-products-chart'
import RevenueChart from './revenue-chart'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceldOrdersCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </div>
  )
}
