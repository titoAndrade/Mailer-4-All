import figure_4 from './ilustrations/main-character-4.png'

const Yeah = () => {
  return (
    <div class="container">
      <div class="row justify-content-center">
       
        <div class="col" style={{marginBottom: 0, paddingBottom: 0}}>
          <h1 id='yeah-title'>Yeah ! You made it !</h1>
          
          <div id="yeah-container">
            <div id='back-animiation'>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_znukgxzs.json"
                background="transparent"
                speed="1"
                loop
                autoplay>   
              </lottie-player>
            </div>
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_ZtJQrD.json"
              background="transparent"
              speed="1"
              loop
              id='front-animiation-1'
              autoplay>
            </lottie-player>
            <img src={figure_4} alt="" id="yeah-character"/>
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_ZtJQrD.json"
              background="transparent"
              speed="2.5"
              loop
              id='front-animiation-2'
              autoplay>
            </lottie-player>
          </div>


        </div>
          
      </div>
          
      <div class="row justify-content-center">
        <div class="col" style={{ textAlign: 'center', marginBottom: '2vmax' }}>
          <lord-icon id="scroll-down-2"
            src="https://cdn.lordicon.com/xhdhjyqy.json"
            trigger="loop"
            colors="primary:#fff"
            state="hover-2"
            style={{ width: '3vmax', height: '3vmax' }}>
          </lord-icon>
        </div>
      </div>

    </div>
  )
}

export default Yeah

