import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationPanel() {
	return (
		<nav className='h-[50px] flex justify-between px-5 bg-gray-700 items-center text-white '>
			<span className='font-bold'>DEMO</span>
			<span>
				<Link to='/' className='mr-2 font-bold'>Продукты</Link>
				<Link to='/stores' className='mr-2 font-bold'>Магазины</Link>
				<Link to='/manufacturers' className='font-bold'>Производители</Link>
			</span>
		</nav>
	)
}
