'use client'

import { useState } from "react"
import { List } from "../components/List"
import { Navbar } from "../components/NavBar"
import { list } from '../list'

export default function CardsList() {
  const [listPeople, setListPeople] = useState([list])

  function handleChange(value: any) {
    setListPeople(value)
  }

  return (
    <main className="bg-gray-800">
      <div className="h-screen container mx-auto">
        <Navbar />
        <h1>CardList</h1>
        <List listPeople={listPeople} handleChange={handleChange} />
      </div>
    </main>
  )
}