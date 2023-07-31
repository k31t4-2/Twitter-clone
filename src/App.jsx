import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Timeline from './Components/Timeline/Timeline'
import Widget from "./Components/Widget/Widget";

function App() {

  return (
    <div className='app'>
      <Sidebar/>
      <Timeline/>
      <Widget/>

    </div>
  )
}

export default App
