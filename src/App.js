import React, { Suspense } from 'react'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init()

const Loader = React.lazy(() => import("./components/Loader"))
const NavbarApp = React.lazy(() => import("./components/NavbarApp"))
const Hero = React.lazy(() => import("./components/Hero"))
// const SendForm = React.lazy(() => import("./components/SendForm"))

const App = () => {

  return  (

    <div class="container" id='all'>
      
      <Suspense id='all' fallback={<Loader id='all' />}>
        <div class='row'>
        
          {/* C O M P O N E N T S  S T A R T S */}

          <NavbarApp/>

          <Hero/>
          {/* <SendForm/> */}
          {/* <div>
            <p>Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
          </div> */}
          {/* C O M P O N E N T S  E N D */}
        
        </div>
      </Suspense>
    
    </div>

  )
}

export default App