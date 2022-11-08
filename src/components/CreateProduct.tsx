import React, { useState } from 'react'
import { IProduct } from '../models'
import ErrorMessage from './ErrorMessage'

interface CreateProductProps {
	onCreate: (product: IProduct) => void
}

export default function CreateProduct({ onCreate }: CreateProductProps) {
	const [error, setError] = useState('')
	const [name, setName] = useState('')
	const [location, setLocation] = useState('')
	const [quantity, setQuantity] = useState(0)
	const [stockStatus, setStatus] = useState('')
	const [price, setPrice] = useState(0)
	const [width, setWidth] = useState(0)
	const [length, setLength] = useState(0)
	const [weight, setWeight] = useState(0)
	const [height, setHeight] = useState(0)
	const [date_added, setDate] = useState('')
	const [viewed, setViewed] = useState(0)
	const [image, setImage] = useState('')


	const changeHandlerName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}
	const changeHandlerLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLocation(event.target.value)
	}
	const changeHandlerQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuantity(event.target.valueAsNumber)
	}
	const changeHandlerStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStatus(event.target.value)
	}
	const changeHandlerPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPrice(event.target.valueAsNumber)
	}
	const changeHandlerWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
		setWidth(event.target.valueAsNumber)
	}
	const changeHandlerLength = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLength(event.target.valueAsNumber)
	}
	const changeHandlerWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
		setWeight(event.target.valueAsNumber)
	}
	const changeHandlerHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
		setHeight(event.target.valueAsNumber)
	}
	const changeHandlerDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDate(event.target.value)
	}
	const changeHandlerViewed = (event: React.ChangeEvent<HTMLInputElement>) => {
		setViewed(event.target.valueAsNumber)
	}
	const changeHandlerImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setImage(event.target.value)
	}

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault()
		setError('')

		if (name.trim().length === 0) {
			setError('Пожалуйста, заполните обязательные поля!')
			return
		}


		try {
			const response = await fetch('http://localhost:8080/product/create', {
				method: "post",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},

				//make sure to serialize your JSON body
				body: JSON.stringify({
					product: name,
					location: location,
					quantity: quantity,
					stockStatus: stockStatus,
					price: price,
					width: width,
					length: length,
					weight: weight,
					height: height,
					date_added: date_added,
					viewed: viewed,
					image: image
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
			<span>Название продукта*</span>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={name}
				onChange={changeHandlerName}
			/>
			<span>Страна производитель*</span>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={location}
				onChange={changeHandlerLocation}
			/>
			<span>Количество</span>
			<input
				type='number'
				step={0.1}
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={quantity}
				onChange={changeHandlerQuantity}
			/>
			<span>Состояние запасов*</span>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={stockStatus}
				onChange={changeHandlerStatus}
			/>
			<span>Цена*</span>
			<input
				type='number'
				step={0.1}
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={price}
				onChange={changeHandlerPrice}
			/>
			<span>Ширина</span>
			<input
				type='number'
				step={0.1}
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={width}
				onChange={changeHandlerWidth}
			/>
			<span>Длина</span>
			<input
				type='number'
				step={0.1}
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={length}
				onChange={changeHandlerLength}
			/>
			<span>Вес</span>
			<input
				type='number'
				step={0.1}
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={weight}
				onChange={changeHandlerWeight}
			/>
			<span>Высота</span>
			<input
				type='number'
				step={0.1}
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={height}
				onChange={changeHandlerHeight}
			/>
			<span>Дата добавления*</span>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='гггг-мм-дд'
				value={date_added}
				onChange={changeHandlerDate}
			/>
			<span>Просмотры</span>
			<input
				type='number'
				step={0.1}
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={viewed}
				onChange={changeHandlerViewed}
			/>
			<span>Изображение</span>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='...'
				value={image}
				onChange={changeHandlerImage}
			/>
			{error && <ErrorMessage error={error} />}
			<button type='submit' className='py-2 px-4 border bg-yellow-400'>Create</button>
		</form>
	)
}
