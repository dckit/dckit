import React from 'react'
import {
  useItems,
  useOptedItem,
  useLoading,
  useLoadItems,
  useSetItems,
} from '@dckit/store'
import { AppBarSource, PageBarSource } from '@dckit/ui'

export const Items: React.FC<{ itemType: string; optedItemId?: number }> = ({
  itemType,
  optedItemId,
}) => {
  const items: any[] = useItems(itemType)
  const loading = useLoading(itemType)
  const load = useLoadItems(itemType)
  const setItems = useSetItems(itemType)
  const optedItem = useOptedItem(itemType)

  return (
    <>
      <AppBarSource>opted item: {optedItem?.field}</AppBarSource>
      <PageBarSource>page: {items ? items.length : 0} items</PageBarSource>
      <button onClick={() => load({ optedItemId })} disabled={loading}>
        {loading ? 'loading...' : 'load items'}
      </button>{' '}
      <button onClick={() => setItems([])}>clear items</button>
      <div />
      <pre>items: {JSON.stringify(items, null, 2)}</pre>
      <pre>opted item: {JSON.stringify(optedItem, null, 2)}</pre>
    </>
  )
}
