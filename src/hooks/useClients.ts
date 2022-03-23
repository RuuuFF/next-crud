import { useEffect } from 'react';
import { useState } from 'react';

import useTableOrForm from './useTableOrForm';
import ClientCollection from '../backend/db/ClientCollection';
import ClientRepository from '../core/ClientRepository';
import Client from '../core/Client';

export default function useClients() {
  const repo: ClientRepository = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  const {
    tableVisible,
    showTable,
    showForm
  } = useTableOrForm()

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      showTable()
    })
  }

  function newClient() {
    setClient(Client.empty())
    showForm()
  }

  function selectClient(client: Client) {
    setClient(client)
    showForm()
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  return {
    client,
    clients,
    newClient,
    selectClient,
    saveClient,
    deleteClient,
    tableVisible,
    showTable
  }
}