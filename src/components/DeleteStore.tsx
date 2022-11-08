import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'

export default function DeleteStore() {
	const [error, setError] = useState('')
	const [storeId, setStoreId] = useState(0)

	const changeHandlerStoreId = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStoreId(event.target.valueAsNumber)
	}

	const submitHandler = async (event: React.FormEvent) => {
		setError('')

		if (storeId === 0) {
			setError('Пожалуйста, введите ID!')
			return
		}


		try {
			await fetch('http://localhost:8080/stores/delete/' + storeId, {
				method: "delete",
			})
			console.log('Delete successful')

		} catch (error) {
			console.log('Error: ' + error);
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<span>ID магазина</span>
			<input
				type='number'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={storeId}
				onChange={changeHandlerStoreId}
			/>
			{error && <ErrorMessage error={error} />}
			<button type='submit' className='py-2 px-4 border bg-yellow-400'>Delete</button>
		</form >
	)
}
