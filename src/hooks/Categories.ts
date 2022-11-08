import axios, { AxiosError } from "axios"
import { useState, useEffect } from "react"
import { ICategories } from "../models"

export function useCategories() {
	const [categories, setCategories] = useState<ICategories[]>([])
	const [error, setError] = useState('')

	async function fetchCategories () {
		try{
		setError('')
    const response = await axios.get<ICategories[]>('http://localhost:8080/categories')
    setCategories(response.data)
		}catch(e: unknown){
			const error = e as AxiosError
      setError(error.message)
		}
	}
	useEffect(()=>{
    fetchCategories()
  }, [])

	return {categories, error}
}
