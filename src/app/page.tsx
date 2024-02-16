export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <div>Receita total</div>
          <div>Pedidos/mes</div>
          <div>Pedidos/dia</div>
          <div>cancelamento</div>
        </div>

        <div className="grid grid-cols-9 gap-4">
          <div>Grafico 1</div>
          <div>Grafico 2</div>
        </div>
      </div>
    </div>
  )
}
