import { createContext, useState } from "react";

interface IModalContext {
	modal: boolean
	delModal: boolean
	open: () => void
	openDel: () => void
	close: () => void
	closeDel: () => void
}

export const ModalContext = createContext<IModalContext>({
	modal: false,
	delModal: false,
	open: () => { },
	openDel: () => { },
	close: () => { },
	closeDel: () => { }
})

export const ModalState = ({ children }: { children: React.ReactNode }) => {
	const [modal, setModal] = useState(false)
	const [delModal, setDelModal] = useState(false)

	const openDel = () => setDelModal(true)
	const closeDel = () => setDelModal(false)

	const open = () => setModal(true)
	const close = () => setModal(false)

	return (
		<ModalContext.Provider value={{ modal, delModal, open, close, closeDel, openDel }}>
			{children}
		</ModalContext.Provider>
	)
}