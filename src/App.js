import React, { Suspense } from 'react'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init()

const Loader = React.lazy(() => import("./components/Loader"))
const SendForm = React.lazy(() => import("./components/SendForm"))

const App = () => {

  return  (

    <div
      id='all'
      class="container"
      style={{ background: '#ededed', width:'100%', margin: 0 }}>
      
      <Suspense id='all' fallback={<Loader id='all' />}>
        <div class='row'>
        
          {/* C O M P O N E N T S  S T A R T */}
        
          <SendForm/>

          {/* C O M P O N E N T S  E N D */}
        
        </div>
      </Suspense>
    
    </div>

  )
  
}

export default App