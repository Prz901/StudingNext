'use client'

import { memo } from "react"

type ItemProps = {
  title: string,
  onAddWishList: (item: string) => any;
}


function ItemComponent({ title, onAddWishList }: ItemProps) {
  return (
    <li>
      {title}
      <button onClick={() => onAddWishList(title)} className="bg-pink-500 w-40 px-4 mx-4"> add to wish list</button>
    </li>
  )
}

export const Item = memo(ItemComponent)