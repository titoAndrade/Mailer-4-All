const Loader = () => {
  return (
    <div id="loading" class="container" style={{ height: '100vh', maxWidth: '100%' }}>
      <div class="row justify-content-center align-items-center">
        <div class="col-12"
             style={{ marginTop: '45vh', marginLeft: '85vw'}}>
          <lottie-player 
            src="https://assets6.lottiefiles.com/packages/lf20_bxw59kpa.json"
            background="transparent"
            speed="1" 
            style={{ width: '13vmin', height: '13vmin'}}
            loop
            autoplay>
          </lottie-player>
        </div>
      </div>
    </div>
  )
} 

export default Loader