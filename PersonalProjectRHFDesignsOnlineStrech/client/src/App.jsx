import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
// import '../assets/images'
import ShopInventory from './components/ShopInventory'
import Create from './components/Create'
import Edit from './components/Edit'
import Nav from './components/Nav'
import Company from './components/Company'
import View from './components/View'
import Register from './components/Register'
import HomePage from './components/HomePage'
import Login from './components/Login'


function App() {
  const [mainUser, setMainUser] = useState({})
  // const images = require.context('../assets/images', true) [
  //   '004a.jpg',
  //   '006a.jpg',
  //   '007a.jpg',
  //   '011a.jpg',
  //   '015a.jpg',
  //   '017a.jpg',
  //   '023a.jpg',
  //   '034a.jpg',
  //   '035a.jpg',
  //   '041a.jpg',
  //   '049a.jpg',
  //   '051a.jpg',
  //   '052a.jpg',
  //   '053a.jpg',
  //   '055a.jpg',
  //   '0061a.jpg',
  //   '062a.jpg',
  //   '066a.jpg',
  //   '075a.jpg',
  //   '078a.jpg',
  //   '079a.jpg',
  //   '10001.jpg',
  //   '10002.jpg',
  //   '10003.jpg',
  //   '10004.jpg',
  //   '10005.jpg',
  //   '10006.jpg',
  //   '10007.jpg',
  //   '10008.jpg',
  //   '10009.jpg',
  //   '10010.jpg'
  // ]
  // const imageList = images.keys().map(image => images(image))


  return (
    <>
    <div className='App'>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/shopInventory" element={ <ShopInventory/> } />
          <Route path="/create" element={ <Create/> } />
          <Route path="/edit/:id" element={ <Edit/> } />
          <Route path="/view/:id" element={ <View/> } />
          <Route path="/company" element={ <Company/> } />
          <Route path='/register' element={ <Register mainUser = {mainUser} setMainUser={setMainUser} />}/>
          <Route path='/login' element={ <Login mainUser = {mainUser} setMainUser={setMainUser} />}/>
          <Route index element={ <HomePage mainUser = {mainUser} setMainUser={setMainUser} />}/>
        </Routes>

      </BrowserRouter>
      {/* <div>
        {imageList.map((image, index) => (
          <img key={index} src={image.default} alt={`image-${index}`} />
        ))}
      </div> */}
    </div>
    </>
  )
}

export default App
