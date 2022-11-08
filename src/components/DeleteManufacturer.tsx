import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'

export default function DeleteManufacturer() {
	const [error, setError] = useState('')
	const [manufacturerId, setManufacturerId] = useState(0)

	const changeHandlerId = (event: React.ChangeEvent<HTMLInputElement>) => {
		setManufacturerId(event.target.valueAsNumber)
	}

	const submitHandler = async (event: React.FormEvent) => {
		setError('')

		if (manufacturerId === 0) {
			setError('Пожалуйста, введите ID!')
			return
		}


		try {
			await fetch('http://localhost:8080/manufacturer/delete/' + manufacturerId, {
				method: "delete",
			})
			console.log('Delete successful')

		} catch (error) {
			console.log('Error: ' + error);
		}
	}
	return (
		<form onSubmit={submitHandler}>
			<span>ID продукта</span>
			<input
				type='number'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={manufacturerId}
				onChange={changeHandlerId}
			/>
			{error && <ErrorMessage error={error} />}
			<button type='submit' className='py-2 px-4 border bg-yellow-400'>Delete</button>
		</form >
	)
}
