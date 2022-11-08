import React, { useState } from 'react'
import { IStore } from '../models'
import ErrorMessage from './ErrorMessage'

interface CreateStoreProps {
	onCreate: (store: IStore) => void
}

export default function CreateStore({ onCreate }: CreateStoreProps) {
	const [error, setError] = useState('')
	const [name, setName] = useState('')
	const [location, setLocation] = useState('')
	const [ownerFio, setOwnerFio] = useState('')
	const [address, setAddress] = useState('')

	const changeHandlerName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}
	const changeHandlerLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLocation(event.target.value)
	}
	const changeHandlerOwnerFio = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOwnerFio(event.target.value)
	}
	const changeHandlerAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAddress(event.target.value)
	}

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault()
		setError('')

		if (name.trim().length === 0) {
			setError('Пожалуйста, заполните обязательные поля!')
			return
		}


		try {
			const response = await fetch('http://localhost:8080/stores/create', {
				method: "post",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},

				//make sure to serialize your JSON body
				body: JSON.stringify({
					name: name,
					ownerFio: ownerFio,
					location: location,
					address: address
				})
			});

			if (!response.ok) {
				const message = 'Error with Status Code: ' + response.status;
				throw new Error(message);
			}

			const data = await response.json();
			console.log(data);
			onCreate(data)
		} catch (error) {
			console.log('Error: ' + error);
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<span>Название магазина*</span>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={name}
				onChange={changeHandlerName}
			/>
			<span>Страна магазина*</span>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={location}
				onChange={changeHandlerLocation}
			/>
			<span>Адрес</span>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={address}
				onChange={changeHandlerAddress}
			/>
			<span>Имя владельца*</span>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={ownerFio}
				onChange={changeHandlerOwnerFio}
			/>

			{error && <ErrorMessage error={error} />}
			<button type='submit' className='py-2 px-4 border bg-yellow-400'>Create</button>
		</form>
	)
}
