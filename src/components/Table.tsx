import { EditIcon, TrashIcon } from './Icons'
import Client from '../core/Client'

interface TableProps {
  clients: Client[]
  selectClient?: (client: Client) => void
  deleteClient?: (client: Client) => void
}

export default function Table(props: TableProps) {
  const showActions = props.selectClient || props.deleteClient

  function renderHeader() {
    return (
      <tr>
        <th className='text-left p-4'>Código</th>
        <th className='text-left p-4'>Nome</th>
        <th className='text-left p-4'>Idade</th>
        {showActions ? <th className='p-4'>Ações</th> : false}
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client, index) => <tr key={client.id} className={
      index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'
    }>
      <td className='text-left p-4'>{client.id}</td>
      <td className='text-left p-4'>{client.name}</td>
      <td className='text-left p-4'>{client.age}</td>
      {showActions ? renderActions(client) : false}
    </tr>)
  }

  function renderActions(client: Client) {
    return (
      <td className='flex justify-center'>
        {props.selectClient ? (
          <button className='
              flex justify-center items-center
              text-green-600 rounded-full p-2 m-1
              hover:bg-purple-50
            '
            onClick={() => props.selectClient?.(client)}
          >
            {EditIcon}
          </button>
        ) : false}

        {props.deleteClient ? (
          <button className='
              flex justify-center items-center
              text-red-500 rounded-full p-2 m-1
              hover:bg-purple-50
            '
            onClick={() => props.deleteClient?.(client)}
          >
            {TrashIcon}
          </button>
        ) : false}
      </td>
    )
  }

  return (
    <table className='w-full rounded-xl overflow-hidden'>
      <thead className='
        bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100
      '>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}