import './App.css'
import Socials from '@/components/Socials/Socials'
import Description from '@/components/Description/Description'
import Skills from '@/components/Skills/Skills'
import LastUpdated from '@/components/LastUpdated/LastUpdated'

function App() {
  return (
    <div className="profile">
      <Socials />
      <Description />
      <Skills />
      <LastUpdated />
    </div>
  )
}

export default App
