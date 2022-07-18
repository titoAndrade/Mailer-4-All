import figure_1 from './ilustrations/main-character-1.png'
import figure_2 from './ilustrations/main-character-2.png'
import figure_3 from './ilustrations/main-character-3.png'
import bubble_1 from './ilustrations/bubble-1.png'
import bubble_2 from './ilustrations/bubble-2.png'
import bubble_3 from './ilustrations/bubble-3.png'
import bubble_4 from './ilustrations/bubble-4.png'

const HowWorks = () => {
  return (
    <div class="container" id="how-works-container">
      
      {/* #1 */}
      <div class="row justify-content-around" id='section-1' style={{ marginTop: '10vmax' }}>

        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-10" id='explination-col'>
          <h1>How does it work?</h1>
          <p><b style={{fontFamily: 'fahkwang', fontSize:'2.3vmax', padding: '0.2em', color: '#474747'}}>mailer <b style={{ fontFamily: 'lobster', margin: 0, color: '#686ACF'}}>4</b> all </b>is a web application that allows you to send emails from the web without having to log in or create a user</p>
        </div>

        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-10" id='illustration-col'>

          <img src={figure_1} alt="" id='main-character-1'/>
       
          <div class="buble-container">
            <img src={bubble_1} alt="" id='bubble-1'/>
            <div class="centered-text">How nice it is to take a walk after work 😊</div >
          </div>

          <div class="buble-container-2">
            <img src={bubble_2} alt="" id='bubble-2'/>
            <div class="centered-text-2">ugh! that one last email 😖</div >
          </div>
       
        </div>        
          
 
      </div>

      {/* #2 */}
      <div class="row justify-content-around" id='section-1' style={{ marginTop: '12vmax' }}>

        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-10" id='illustration-col-2' style={{ marginRight: '-10vmax' }}>

          <img src={figure_2} alt="" id='main-character-2'/>

          <div class="buble-container-3">
            <img src={bubble_3} alt="" id='bubble-3'/>
            <div class="centered-text-3">don't worry look at this app 😎</div >
          </div>

        </div>    

        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-10" id='explination-col-2'>
          {/* S T E P - 1 */}
          <div class="row justify-content-center" style={{marginBottom: '2vmax', marginTop: '3vmax'}}>
            <div class="col-2" style={{ border: 'solid 1px #000'}}>
              <lord-icon
                src="https://cdn.lordicon.com/mtdulhdc.json"
                trigger="hover"
                colors="primary:#000,secondary:#000"
                style={{width:'8vmax', height:'8vmax'}}>
              </lord-icon>
            </div>
            <div class="col-8" style={{ border: 'solid 1px #000', textAlign:'left', paddingTop: '2.5vmax', paddingLeft: '2vmax' }}>
              <p>busca un dispositivo</p>
            </div>
          </div>
          {/* S T E P - 2 */}
          <div class="row justify-content-center">
            <div class="col-2" style={{ border: 'solid 1px #000'}}>
              <lord-icon
                src="https://cdn.lordicon.com/vcoyflbj.json"
                trigger="hover"
                colors="primary:#000,secondary:#000"
                style={{width:'8vmax', height:'8vmax'}}>
              </lord-icon>
            </div>
            <div class="col-8" style={{ border: 'solid 1px #000', textAlign:'left', paddingTop: '2.5vmax', paddingLeft: '2vmax' }}>
              <p>ingresa tu nombre y correo</p>
            </div>
          </div>
        </div>

      </div>

      {/* #3 */}
      <div class="row justify-content-around" style={{ marginTop: '12vmax' }}>

        {/* S T E P - 3 */}
        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-10" id='explination-col-2'>
            <div class="row justify-content-center" style={{marginBottom: '2vmax', marginTop: '3vmax'}}>

              <div class="col-2" style={{ border: 'solid 1px #000'}}>
                <lord-icon
                  src="https://cdn.lordicon.com/igpsgesd.json"
                  trigger="hover"
                  colors="primary:#000,secondary:#000"
                  style={{width:'8vmax', height:'8vmax'}}>
                </lord-icon>
              </div>

              <div class="col-8" style={{ border: 'solid 1px #000', textAlign:'left', paddingTop: '2.5vmax', paddingLeft: '2vmax' }}>
                <p>redacta tu correo y envia</p>
              </div>

            </div>    
        </div>


        <div class="col-xl-5 col-lg-5 col-md-6 col-sm-10" id='illustration-col-3' style={{ marginRight: '-10vmax' }}>

          <img src={figure_3} alt="" id='main-character-3'/>

          <div class="buble-container-4">
            <img src={bubble_4} alt="" id='bubble-4'/>
            <div class="centered-text-4">" . . . " 😅</div >
          </div>

        </div>    


      </div>

    


      
    </div>
  )
}

export default HowWorks