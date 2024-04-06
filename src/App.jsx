import { Fragment } from 'react'
import PersistentDrawerLeft from './Components/Layout/Drawer'
import './App.css'
import TempTabs from './Components/Layout/TempTabs'



function App() {


  return (
    <Fragment>

      <PersistentDrawerLeft />
      <TempTabs />
    </Fragment>
  )
}

export default App
