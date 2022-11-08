import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { IStore } from '../models'

export function useStores() {
	const [stores, setStores]=useState<IStore[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addStores(stores: IStore){
    setStores(prev => [...prev, stores])
  }
	async function fetchStores () {
	try{
      setError('')
    setLoading(true)
    const response = await axios.get<IStore[]>('http://localhost:8080/stores')
    setStores(response.data)
    setLoading(false)
    } catch(e: unknown){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(()=>{
    fetchStores()
  }, [])
	return {stores, error, loading, addStores}
}
