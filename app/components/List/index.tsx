'use client'

import { useState } from 'react'
import { list } from '../../list'

interface TypeProps {
  listPeople: [],
  handleChange: () => void,
}

interface typePeople {
  name: string,
  idade: number,
  cidade: string,
  documento: string,
  color: string
}

export function List({ listPeople, handleChange }: any) {

  const [activated, setActivated] = useState(false)

  let slicedArray = listPeople

  const handleFilterAge = () => {
    const filtered = listPeople.filter((people: typePeople) => {
      return people.idade < 21
    })
    handleChange(filtered)
  }

  const handleFilterGreatAge = () => {
    const filtered = listPeople.filter((people: typePeople) => {
      return people.idade > 21
    })
    handleChange(filtered)
  }

  const handleBackList = () => {
    handleChange(list)
    setActivated(false)
  }

  const handleColors = () => {
    const colors = listPeople.filter((people: typePeople) => {
      return people.color === 'red'
    })
    return colors
  }

  const handleAdd = () => {
    handleChange([...listPeople, {
      name: 'Barolo',
      idade: 42,
      cidade: 'São Paulo',
      documento: 'cpf',
      color: 'gray'
    }])
  }

  const handleActive = () => {
    setActivated(true)
  }

  if (activated === true) {
    slicedArray = handleColors()

  } else {
    slicedArray = listPeople
  }

  return (
    <div className="w-full pt-20 ">
      <div className="py-10 w-1/2 flex items-center justify-between">
        {/* <button onClick={handleFilterAge}>Filtrar menor Idade</button>
        <button onClick={handleFilterGreatAge}>Filtrar maior Idade</button> */}
        <button onClick={handleActive}>Cores</button>
        <button onClick={handleBackList}>Voltar</button>
        <button onClick={handleAdd}>Adicionar</button>
      </div>


      {slicedArray.map((people: typePeople, index: number) => {
        return (
          <div className='flex items-center gap-20 justify-between w-full px-4 hover:bg-slate-700' key={index}>
            <span style={{ background: `${people.color}` }}>{people.color}</span>
            <p>{people.name}</p>
            <p>{people.idade}</p>
            <p>{people.cidade}</p>
            <p>{people.documento}</p>
          </div>
        )
      })}
    </div>
  )
}