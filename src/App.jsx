// rafce
import React, { useEffect ,useState } from 'react'
import Test from './components/Test'

const App = () => {
  const [data3, setData3] = useState('toto3')

  useEffect(() => {
    // Montage du composent
    setData3('toto4')
  
    /*
    return () => {
      // Démontage du composent
      second
    }
    */
  }, /* Update */[])
  

  console.log(data3)
  const params = {
    nom: 'toto',
    prenom: 'tutu'
  }

  return (
    <Test 
    data={params} 
    data2={'toto'} 
    />
  )
}

export default App