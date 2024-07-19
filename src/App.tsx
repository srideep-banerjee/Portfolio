import './styles/App.css'
import AppBar from './AppBar'
import { FunctionComponent, useState } from 'react'
import { appData } from './data/app'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const appBarNames = Array.from(appData.keys())
  
  const Child = getChildByName(appBarNames[selectedIndex])

  return (
    <>
      <div className='app-container'>
        <header>
          <AppBar
            items={appBarNames}
            seletedIndex={selectedIndex}
            onSelectionChange={setSelectedIndex}
          />
        </header>
        <Child />
      </div>
    </>
  )
}

function getChildByName(name: string): FunctionComponent {
  const component = appData.get(name)

  if (component == null || component == undefined) {
    return () => (
      <div className='not-implemented' >
        Not Implemented Yet
      </div>
    )
  }
  
  return component
}

export default App