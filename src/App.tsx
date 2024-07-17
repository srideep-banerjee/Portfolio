import './styles/App.css'
import AppBar from './AppBar'
import Home from './home/Home'
import { useState } from 'react'

function App() {
  const navbarItems = ["Profile", "Skills", "Projects", "Education"]
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      <div className='app-container'>
        <header>
          <AppBar
            items={navbarItems}
            seletedIndex={selectedIndex}
            onSelectionChange={setSelectedIndex}
          />
        </header>
        <Home />
      </div>
    </>
  )
}

export default App