import { Button } from '@mui/material'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
const { data, error, loading } = useFetch(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=dogs&per_page=50`)

  return (
    <>
      <Button>Hola mundo</Button>
    </>
  )
}

export default App
