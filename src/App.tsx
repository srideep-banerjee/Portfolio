import './styles/App.css'
import AppBar from './AppBar'
import Home from './home/Home'

function App() {

  return (
    <>
      <div className='app-container'>
        <header>
          <AppBar />
        </header>
        <Home />
      </div>
    </>
  )
}

export default App