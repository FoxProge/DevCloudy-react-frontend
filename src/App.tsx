import { Route, Routes } from 'react-router-dom';
import './App.tsx';
import NavigationPanel from './components/NavigationPanel';
import ManufacturerPage from './pages/manufacturerPage';
import ProductsPage from './pages/productsPage';
import StoresPage from './pages/storesPage';


function App() {
  return (
    <>
      <NavigationPanel />
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/stores' element={<StoresPage />} />
        <Route path='/manufacturers' element={<ManufacturerPage />} />
      </Routes></>
  )
}

export default App;
