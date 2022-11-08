import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'

export default function DeleteProduct() {
	const [error, setError] = useState('')
	const [productId, setProductId] = useState(0)

	const changeHandlerId = (event: React.ChangeEvent<HTMLInputElement>) => {
		setProductId(event.target.valueAsNumber)
	}

	const submitHandler = async (event: React.FormEvent) => {
		setError('')

		if (productId === 0) {
			setError('Пожалуйста, введите ID!')
			return
		}


		try {
			await fetch('http://localhost:8080/product/delete/' + productId, {
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
				value={productId}
				onChange={changeHandlerId}
			/>
			{error && <ErrorMessage error={error} />}
			<button type='submit' className='py-2 px-4 border bg-yellow-400'>Delete</button>
		</form >
	)
}
