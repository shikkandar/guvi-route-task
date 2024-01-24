import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavigationMenu from './NavigationMenu'
import { All } from './All'
import FullStack from './FullStack'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'

function App() {
 

  return (

      <Router>
        <NavigationMenu/>
        <Routes>
          <Route path='/' element={<All/>} />
          <Route path='/fullStack' element={<FullStack/>}/>
          <Route path='/dataScienec' element={<DataScience/>}/>
          <Route path='/cyberSecurity' element={<CyberSecurity/>}/>
          <Route path='/career' element={<Career/>}/>
        </Routes>
      </Router>

    
   
    
    
  )
}

export default App
