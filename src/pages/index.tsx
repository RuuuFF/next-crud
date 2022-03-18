import { useState } from "react"
import Button from "../components/Button"
import Form from "../components/Form"
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

  function selectedClient(client: Client) {
    console.log('Edit: ' + client.name)
  }

  function deletedClient(client: Client) {
    console.log('Delete: ' + client.name)
  }

  function saveClient(client: Client) {
    console.log(client)
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table')

  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    ">
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button
                color="green"
                className="mb-4"
                onClick={() => setVisible('form')}
              >
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            />
          </>
        ) : (
          <Form
            client={clients[0]}
            clientChanged={saveClient}
            cancel={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  )
}
