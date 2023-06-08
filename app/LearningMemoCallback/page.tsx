"use client";
import { useState, useMemo, useCallback } from "react";
import { Item } from "../components/Item/item";

export default function LearningMemoCallback() {
  const [items, setItems] = useState<string[]>([]);
  const [wishList, setWishList] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('')



  // Use Memo possui dois parametros uma função que retorna o calculo que estou utilizando e um array de dependencias no qual o que ele precisa para ser executado nesse exemplo é o Items.
  const countItemsWithOne = useMemo(() => {
    console.log("teste")
    return items.filter(item => item.includes('1')).length
  }, [items])


  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  function stop() {
    setItems([]);
  }

  const addToWishList = useCallback((item: string) => {
    setWishList(state => [...state, item])
  }, [])

  return (
    <div className="bg-gray-800  text-white py-10 ">
      <div className="container mx-auto">
        <h1 className="pb-10">
          Aprendendo melhor Use Memo UseCallBack e Memo.
        </h1>
        <div className="text-lg text-blue-600 py-5">
          Memo: {' '}
          <span className="text-white text-base">
            Função que diz ao componente, quando seu componente pai redenrizar
            ou mudar, antes de entrar no fluxo de renderização, quero que
            compare todas as propriedades e estados desse componente, caso nada
            tenha mudado não precisa entrar no fluxo de renderização.
          </span>
          <h2>Quando utilizar: {' '}
            <ul className="text-orange-500">
              <li>1 - Pure Functional Components</li>
              <li>2 - Renders to often - (Componente renderiza demais - 'muitas vezes')</li>
              <li>3 - Re-renders with same props - (Componente renderiza sempre com as mesmas propriedades)</li>
              <li>4 - Medium to big sizes - (Componentes Médios para grandes) - (Não tem efeito nenhum com componentes pequenos)</li>
            </ul>
          </h2>
        </div>

        <div className="text-lg text-blue-600 py-5">
          UseMemo: {' '}
          <span className="text-white text-base">
            Precisa fazer uma comparação de valores para saber quais valores foram mudados evitar utilizar com calculos pequenos ou simples porque no final não é tão vantajoso assim.
          </span>
          <h2>Quando utilizar: {' '}
            <ul className="text-orange-500">
              <li>1 - Evitar re-calculos complexos</li>
              <li>2 - Igualdade Referencial</li>
            </ul>
          </h2>
        </div>

        <div className="text-lg text-blue-600 py-5">
          Shallow Compare -- Comparação rasa`: {' '}
          <span className="text-white text-base">
            Aplica-se tanto para Memo, UseMemo e UseCallback.
            O tipo de comparação que o react faz quando utiliza o Memo ou o UseMemo é basicamente a mesma comparação que um === . (Checa a comparação das propriedades - Props).
          </span>
          <h2>Quando utilizar: {' '}
            <ul className="text-orange-500">
              <li>1 - Evitar re-calculos complexos</li>
            </ul>
          </h2>
        </div>

        <div className="text-lg text-blue-600 py-5">
          UseCallback`: {' '}
          <span className="text-white text-base">
            Permite com que se memorize uma função dentro da posição de memória para que quando aquele componente renderize ele nao precise recriar aquela função.

            Não faz a função ser mais rápida.
          </span>
          <h2>Quando utilizar: {' '}
            <ul className="text-orange-500">
              <li>1 -  Resolver problemas de igualdade referencial</li>
            </ul>
          </h2>
        </div>




        <div>
          <h2 className="pb-4">Exemplo</h2>
          <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem} className="text-black outline-none" />

          <button
            onClick={addItemToList}
            className="p-1 bg-red-400 w-10 rounded-sm"
          >
            {" "}
            Add
          </button>

          <button
            onClick={stop}
            className="p-1 bg-red-400 w-10 rounded-sm"
          >
            {" "}
            stop
          </button>

          <ul className="py-4">
            {items.map((item, index) => {
              return <Item key={index} onAddWishList={addToWishList} title={item} />;
            })}
          </ul>
          <div>
            Contagem : {countItemsWithOne}
          </div>
        </div>
      </div>
    </div>
  );
}
