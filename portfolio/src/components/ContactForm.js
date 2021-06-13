import Zoom from 'react-reveal/Zoom';
import emailjs from "emailjs-com";
import "./contact.css";


function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_jaq5e0n', 'template_e8hbl5f', e.target, 'user_QincF6erwTt3HzHgdbPZr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()  
  }
  
  return (

    <form onSubmit={sendEmail} id="contactt">
      <div className="container">
        <Zoom cascade>
          <h1>Contact</h1>
        </Zoom>
        <label htmlFor="name"></label>
        <input type="text" name="name" class="feedback-input" placeholder="Name" required />
      </div>
      <div className="email">
        <label htmlFor="email"></label>
        <input type="email" name="email" class="feedback-input" placeholder="Email" required />
      </div>
      <div className="message">
        <label htmlFor="message"></label>
        <textarea name="message" class="feedback-input" placeholder="Comment" required />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;