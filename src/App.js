import React from 'react';
import {BrowserRouter , Route, Switch, Routes} from 'react-router-dom'
import Item from './Component/List/Item'
import Home from './Component/Home/Home'
import {useSelector} from 'react-redux'
function App() {
  const id = useSelector(state=>state.id.id)
  return (
     <BrowserRouter>
    
      <Routes>
        
        <Route path='/home' element={<Home />}  />
        <Route path='/' element={<Home />} />
        <Route path={`/product/${id}`} element={<Item />} />
      </Routes>
     </BrowserRouter>
      
   
  );
}

export default App;
