interface EntranceProps {
  value: any
  text: string
  type?: 'text' | 'number'
  readOnly?: boolean
  onChange?: (value: any) => void
  margin?: boolean
}

export default function Entrance(props: EntranceProps) {
  return (
    <div className={`flex flex-col ${props.margin ? 'mt-4' : ''}`}>
      <label className="mb-4">{props.text}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        readOnly={props.readOnly}
        onChange={event => props.onChange?.(event.target.value)}
        className={`
          border border-purple-500 rounded-lg
          bg-gray-100 px-4 py-2
          focus:outline-none
          ${props.readOnly ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  )
}