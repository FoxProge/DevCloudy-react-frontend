import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { IManufacturer } from '../models'

export function useManufacturers() {
	const [manufacturer, setManufacturers]=useState<IManufacturer[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addManufacturer(manufacturer: IManufacturer){
    setManufacturers(prev => [...prev, manufacturer])
  }
	async function fetchManufacturers () {
	try{
      setError('')
    setLoading(true)
    const response = await axios.get<IManufacturer[]>('http://localhost:8080/manufacturer')
    setManufacturers(response.data)
    setLoading(false)
    } catch(e: unknown){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(()=>{
    fetchManufacturers()
  }, [])
	return {manufacturer, error, loading, addManufacturer}
}
