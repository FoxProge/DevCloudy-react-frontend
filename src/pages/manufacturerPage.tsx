import React, { useContext } from 'react'
import CreateManufacturer from '../components/CreateManufacturer'
import DeleteManufacturer from '../components/DeleteManufacturer'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { Manufacturer } from '../components/manufacturer'
import Modal from '../components/Modal'
import { ModalContext } from '../context/ModalContext'
import { useManufacturers } from '../hooks/Manufacturers'
import { IManufacturer } from '../models'

export default function ManufacturerPage() {
	const { loading, error, manufacturer, addManufacturer } = useManufacturers()
	const { modal, open, close, delModal, openDel, closeDel } = useContext(ModalContext)

	const createHandler = (manufacturer: IManufacturer) => {
		close()
		addManufacturer(manufacturer)
	}
	return (
		<div className=' bg-yellow-100'>
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
				{manufacturer.map(manufacture => <div className='wrapper bg-white'><Manufacturer manufacturer={manufacture} key={manufacture.manufacturerId} /></div>)}
				{modal && <Modal title='Создание записи о производителе' onClose={close}>
					<CreateManufacturer onCreate={createHandler} />
				</Modal>}
				{delModal && <Modal title='Удаление записи о производителе' onClose={closeDel}>
					<DeleteManufacturer />
				</Modal>}
			</div>
		</div>
	)
}
