import React, { useContext } from 'react'
import CategoryList from '../components/CategoryList'
import CreateProduct from '../components/CreateProduct'
import DeleteProduct from '../components/DeleteProduct'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import { Product } from '../components/product'
import { ModalContext } from '../context/ModalContext'
import { useCategories } from '../hooks/Categories'
import { useProducts } from '../hooks/products'
import { IProduct } from '../models'

export default function ProductsPage() {
	const { loading, error, products, addProduct } = useProducts()
	const { categories } = useCategories()
	const { modal, open, close, delModal, openDel, closeDel } = useContext(ModalContext)

	const createHandler = (product: IProduct) => {
		close()
		addProduct(product)
	}

	return (
		<div className=' bg-yellow-100'>
			<div className='absolute top-20 left-10 bg-yellow-200'>
				<p className='font-bold text-center'>Категории</p>
				{categories.map(category => <div className='wrapper bg-white'>
					<CategoryList category={category} key={category.categoryId} />
				</div>)}
			</div>
			<div className='container mx-auto max-w-2xl pt-5 '>
				{loading && <Loader />}
				{error && <ErrorMessage error={error} />}
				<button
					onClick={open}
					className='font-bold fixed top-15 right-5 rounded-full bg-gray-700 text-white text-2xl px-4 py-2'
				>+</button>
				<button
					onClick={openDel}
					className='fixed top-15 right-20 rounded-full bg-gray-700 text-white text-2xl px-4 py-2'
				>Del</button>
				{products.map(product => <div className='wrapper bg-white'><Product product={product} key={product.productId} /></div>)}
				{modal && <Modal title='Создание продукта' onClose={close}>
					<CreateProduct onCreate={createHandler} />
				</Modal>}
				{delModal && <Modal title='Удаление продукта' onClose={closeDel}>
					<DeleteProduct />
				</Modal>}

			</div>
		</div>
	)
}
