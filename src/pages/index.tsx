import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {
  const clients = [
    new Client('Carlos', 34, '1'),
    new Client('João', 22, '2'),
    new Client('Fabricio', 62, '3'),
    new Client('Nya', 51, '4'),
  ]

  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    ">
      <Layout title="Cadastro Simples">
        <Table clients={clients} ></Table>
      </Layout>
    </div>
  )
}
