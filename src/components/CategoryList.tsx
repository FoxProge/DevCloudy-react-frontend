import React from 'react'
import { ICategories } from '../models'

interface CategoriesProps {
	category: ICategories
}

export default function CategoryList({ category }: CategoriesProps) {
	return (
		<>
			<div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
				<p>{category.categoryId}: {category.category}</p>
			</div>
		</>

	)
}
