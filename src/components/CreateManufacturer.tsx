import React, { useState } from 'react'
import { IManufacturer } from '../models'
import ErrorMessage from './ErrorMessage'

interface CreateManufacturerProps {
	onCreate: (manufacturer: IManufacturer) => void
}

export default function CreateManufacturer({ onCreate }: CreateManufacturerProps) {
	const [error, setError] = useState('')
	const [manufacturerName, setManufacturerName] = useState('')
	const [location, setLocation] = useState('')
	const [ownerFio, setOwnerFio] = useState('')
	const [address, setAddress] = useState('')

	const changeHandlerName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setManufacturerName(event.target.value)
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

		if (manufacturerName.trim().length === 0) {
			setError('Пожалуйста, заполните обязательные поля!')
			return
		}


		try {
			const response = await fetch('http://localhost:8080/manufacturer/create', {
				method: "post",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},

				//make sure to serialize your JSON body
				body: JSON.stringify({
					manufacturerName: manufacturerName,
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
			<span>Название компании*</span>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={manufacturerName}
				onChange={changeHandlerName}
			/>
			<span>Страна компании*</span>
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
