import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const SendForm = () => {
  
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_dlf32ye', 'template_mailer4all', form.current, 'yU_ce4p04RlrLWunW')
      .then((result) => {
          alert('Message sent succesfully')
      }, (error) => {
          alert(error.message)
      })
      e.target.reset()
  }

  return (

    <form id='allform' ref={form} onSubmit={sendEmail}>

      {/* T I T L E */}
      <div class="row justify-content-center" id='app-title'>
        <div class="col">
          <img src="" alt="" />
        </div>
      </div>


      {/*  A P P  */}
      <div class="row justify-content-center">

        <div class="col-10">  
          {/* U S E R  N A M E */}
          <div class="row justify-content-center">
            <div class="col mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" name="user_name" class="form-control" id="exampleFormControlInput1" placeholder="Your name" required={true}/>
            </div>
          </div>

          {/* F R O M  E M A I L */}
          <div class="row justify-content-center">
            <div class="col mb-3">
              <label for="exampleFormControlInput1" class="form-label">Your Email</label>
              <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required={true}/>
            </div>
          </div>

          {/* T O  E M A I L */}
          <div class="row justify-content-center">
            <div class="col mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email destiny</label>
              <input type="email" name="to_email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required={true}/>
            </div>
          </div>

          {/* T E X T  A R E A */}
          <div class="row justify-content-center">
            <div class="col mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                name="message"
                rows="5" 
                placeholder="Write something..."
                required={true}
                style={{ resize: 'none' }}>
              </textarea>
            </div>
          </div>

          {/* B U T T O N */}
          <div class="row justify-content-center">
            <button 
              class="col-10 mt-1 btn btn-primary"
              type="submit"
              value="Send"
              id="sendFormButton">
              Send
            </button>
          </div>
        </div>

      </div>
    </form>

  )
}

export default SendForm

