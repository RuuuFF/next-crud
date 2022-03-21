import { useState } from "react"
import Button from "../components/Button"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const clients = [
    new Client('Carlos', 34, '1'),
    new Client('João', 22, '2'),
    new Client('Fabricio', 62, '3'),
    new Client('Nya', 51, '4'),
  ]

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function deletedClient(client: Client) {
    console.log('Delete: ' + client.name)
  }

  function saveClient(client: Client) {
    console.log(client)
    setVisible('table')
  }

  function newClient() {
    setClient(Client.empty())
    setVisible('form')
  }

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
                onClick={newClient}
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
            client={client}
            clientChanged={saveClient}
            cancel={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  )
}
