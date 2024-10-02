import './App.scss'
import Button from './components/buttons/mainButton/Button'
import FilterContainer from './components/filterContainer/FilterContainer'
import Header from './components/header/Header'
import LeftSection from './components/leftSection/LeftSection'
import RightSection from './components/rightSection/RightSection'

function App() {

  return (
    <>
    <Header />
    <main>
        <LeftSection />
        <RightSection />
    </main>
    </>
  )
}

export default App
