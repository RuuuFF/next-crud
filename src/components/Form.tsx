import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Entrance from "./Entrance";

interface FormProps {
  client: Client
  clientChanged?: (client: Client) => void
  cancel?: () => void
}

export default function Form(props: FormProps) {
  const id = props.client?.id
  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)

  return (
    <div>
      {id ? (
        <Entrance
          text="Código"
          value={id}
          readOnly
        />
      ) : false}
      <Entrance
        text="Nome"
        value={name}
        onChange={setName}
        margin={id ? true : false}
      />
      <Entrance
        text="Idade"
        type="number"
        value={age}
        onChange={setAge}
        margin
      />

      <div className="flex justify-end mt-4">
        <Button
          color="blue"
          onClick={() => props.clientChanged?.(new Client(name, Number(age), id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button
          className="ml-2"
          onClick={props.cancel}
        >
          Cancelar
        </Button>
      </div>
    </div>
  )
}