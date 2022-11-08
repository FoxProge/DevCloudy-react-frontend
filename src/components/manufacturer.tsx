import { IManufacturer } from '../models'

interface ManufacturerProps {
	manufacturer: IManufacturer
}

export function Manufacturer({ manufacturer }: ManufacturerProps) {

	return (
		<div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
			<p className='font-bold'>{manufacturer.manufacturerName}</p>
			<p>Владелец: {manufacturer.ownerFio}</p>
			<p>Адрес: {manufacturer.location}, {manufacturer.address}</p>
			<p>ID: {manufacturer.manufacturerId}</p>
		</div>
	)
}
