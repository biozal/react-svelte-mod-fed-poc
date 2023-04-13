import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/project-list/project-list'
import ProjectList from "./components/project-list/project-list";

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Module Federation POC</h1>
      <div className="card">
        <ProjectList></ProjectList>
      </div>
    </div>
  )
}

export default App
