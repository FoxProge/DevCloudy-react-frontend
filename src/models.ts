export interface IProduct{
	productId?: number
  product: string
  location: string
  quantity: number
  stockStatus: string
  price: number
  width: number
  length: number
  weight: number
  height: number
  date_added: string
  viewed: number
  image: string
  categoryId: number
  manufacturerId: number
  storeId: number
  orderId: number
}

export interface ICategories{
  categoryId?: number
  category: string
}

export interface IManufacturer{
  manufacturerId?: number
  manufacturerName: string
  ownerFio: string
  address: string
  location: string
}

export interface IStore{
  storeId?: number
  name: string
  ownerFio: string
  location: string
  address: string
}