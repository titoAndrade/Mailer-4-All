import logotype from './ilustrations/hero-logotype.png'
import group1 from './ilustrations/main-character-5.png'
import group2 from './ilustrations/group1.png'
import group3 from './ilustrations/group2.png'

const Hero = () => {
  return (
    <div class="container" id='hero-container'>
      <div class="row justify-content-center align-items-center" >
        <div class="col">

          {/* L O G O T Y P E */}
          <div class="row justify-content-center align-items-center">
            <div class="col" style={{ textAlign: 'center', paddingTop: '8vmin', paddingBottom: '5vh' }}>
              <img src={logotype} alt="" style={{ width: '48vmax' }}/>
            </div>
          </div>
          
          {/* C H A R A C T E R S */}
          <div class="row justify-content-center align-items-center" id="characters">
            <div class="col" style={{ textAlign: 'center', paddingTop: '0.5vmax'}}>
              <img src={group1} alt=""/>
              <img src={group2} alt=""/>
              <img src={group3} alt=""/>
              <lord-icon id="scroll-down"
                src="https://cdn.lordicon.com/xhdhjyqy.json"
                trigger="loop"
                colors="primary:#000"
                state="hover-2">
              </lord-icon>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero