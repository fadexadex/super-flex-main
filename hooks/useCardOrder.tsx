import { useState } from 'react'

export function useCardOrder(initialOrder: number[]) {
  const [order, setOrder] = useState(initialOrder)

  const moveToFront = (index: number) => {
    setOrder(prevOrder => {
      const newOrder = [...prevOrder]
      const item = newOrder.splice(index, 1)[0]
      newOrder.unshift(item)
      return newOrder
    })
  }

  return { order, moveToFront }
}