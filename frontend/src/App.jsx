import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom'
// import './assets/scss/global.scss'
// import { AppHeader } from './cmps/AppHeader'
import { MsgIndex } from './pages/MsgIndex'
import './assets/main.scss'


function App() {
  return (
    <Router>
      <section className="main-app">
        {/* <AppHeader /> */}
        <main className="container">
          <Routes>
            <Route path='/' element={<MsgIndex />} />
          </Routes>
        </main>


      </section>
    </Router>
  )
}

export default App
