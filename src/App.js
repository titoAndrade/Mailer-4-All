import React, { Suspense } from 'react'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init()

const Loader = React.lazy(() => import("./components/Loader"))
const NavbarApp = React.lazy(() => import("./components/NavbarApp"))
const Hero = React.lazy(() => import("./components/Hero"))
const GoTo = React.lazy(() => import("./components/GoTo"))
const HowWorks = React.lazy(() => import("./components/HowWorks"))
const Yeah = React.lazy(() => import("./components/Yeah"))
const SendForm = React.lazy(() => import("./components/SendForm"))
const Footer = React.lazy(() => import("./components/Footer"))

const App = () => {

  return  (

    <div class="container" id='all'>
      
      <Suspense id='all' fallback={<Loader id='all' />}>
        <div class='row'>
        
          {/* C O M P O N E N T S  S T A R T S */}

          <NavbarApp/>

          <Hero/>

          <GoTo/>

          <HowWorks/>

          <Yeah/>

          <SendForm/>

          <Footer/>

          {/* C O M P O N E N T S  E N D */}
        
        </div>
      </Suspense>
    
    </div>

  )
}

export default App