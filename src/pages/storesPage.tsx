import { useContext } from 'react'
import CreateStore from '../components/CreateStore'
import DeleteStore from '../components/DeleteStore'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import { Store } from '../components/store'
import { ModalContext } from '../context/ModalContext'
import { useStores } from '../hooks/Stores'
import { IStore } from '../models'

export default function StoresPage() {
	const { loading, error, stores, addStores } = useStores()
	const { modal, open, close, delModal, openDel, closeDel } = useContext(ModalContext)

	const createHandler = (stores: IStore) => {
		close()
		addStores(stores)
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
				{stores.map(store => <div className='wrapper bg-white'><Store store={store} key={store.storeId} /></div>)}
				{modal && <Modal title='Создание записи о магазине' onClose={close}>
					<CreateStore onCreate={createHandler} />
				</Modal>}
				{delModal && <Modal title='Удаление записи о магазине' onClose={closeDel}>
					<DeleteStore />
				</Modal>}
			</div>
		</div>
	)
}
