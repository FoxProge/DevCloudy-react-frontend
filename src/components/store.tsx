import React from 'react'
import { IStore } from '../models'

interface StoreProps {
	store: IStore
}

export function Store({ store }: StoreProps) {


	return (
		<div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
			<p className='font-bold'>{store.name}</p>
			<p>Владелец: {store.ownerFio}</p>
			<p>Адрес: {store.location}, {store.address}</p>
			<p>ID: {store.storeId}</p>
		</div>
	)
}
