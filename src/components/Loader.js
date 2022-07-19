const Loader = () => {
  return (
    <div id="loading" class="container" style={{ height: '100vh', maxWidth: '100%' }}>
      <div class="row justify-content-center align-items-center">
        <div class="col-12"
             style={{ marginTop: '45vh', marginLeft: '85vw'}}>
          <lottie-player 
            src="https://assets3.lottiefiles.com/packages/lf20_rmmuyh5f.json"
            background="transparent"
            speed="1" 
            style={{ width: '20vmin', height: '20vmin'}}
            loop
            autoplay>
          </lottie-player>
        </div>
      </div>
    </div>
  )
} 

export default Loader