import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
	product: IProduct
}

export function Product({ product }: ProductProps) {

	const [details, setDetails] = useState(false)
	const btnBgClassName = details ? 'bg-gray-500 text-yellow-300 font-bold' : 'bg-yellow-300 font-bold'
	const btnClasses = ['py-2 px-4 border', btnBgClassName]

	return (
		<div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
			<img className='w-1/6' src={product.image} alt='mo_image.png' />
			<p>{product.product}</p>
			<p className='font-bold'>{product.price} руб</p>
			<p>{product.stockStatus}</p>
			<button
				className={btnClasses.join(' ')}
				onClick={() => setDetails(prev => !prev)}
			>{details ? 'Скрыть' : 'Подробнее'}</button>

			{details && <div>
				<p></p>
				<p>Id: {product.productId}</p>
				<p>Страна производитель: {product.location}</p>
				<p>Ширина: {product.width}</p>
				<p>Длина: {product.length}</p>
				<p>Высота: {product.height}</p>
				<p>Вес: {product.weight}</p>
				<p>Дата добавления: {product.date_added}</p>
				<p>Просмотры: {product.viewed}</p>
			</div>}
		</div>
	)
}