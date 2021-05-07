import emailjs from "emailjs-com"




export default function Home() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wx7re1d', 'template_dm1qjo4', e.target, 'user_mwZSE92si5mp5t7Rww9bg')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }


  return (
    <div>
      <div className="home-header">
        <h1 className='justin-title'><em>Hello World.</em><br />
       I'm Justin,<br />Web Developer</h1>
        <img className='justin-picture' src="/justin.JPG" alt="" />
      </div>
      <div className='home-divs'>
        <h1>What do I do?</h1>
        <p> I'm a passionate full-stack developer and I build web-applications
        for a variety of needs. I make efficient, user-friendly app's, with
        several web-technologies. I specialize in React.js and
        Ruby on Rails and I have experience with other langauges and frameworks. I currently work remote as a freelance developer
        and I am always able to take on new projects. Need some help building a website?
        <h3 style={{ color: '#2AB67B', textAlign: 'center' }}>Contact me</h3></p>
      </div>
      <div className='home-divs'>
        <h1>My Portfolio</h1>
        <p>Below, you can find some projects I've created. Feel free to click
        and browse around<br />
          (BZN only works on safari due to the API & Cors issues)
        </p>
        <center>
          <a href="https://justinknuth.github.io/BZN/" target="_blank">
            <img className='project-pics' src="/bzn.png" alt="" />
          </a>
          <a href="https://fullstackcoffee.netlify.app/" target="_blank">
            <img className='project-pics' src="/fscc.png" alt="" />
          </a>
          <a href="https://montpelierzombieguide.netlify.app/" target="_blank">
            <img className='project-pics' src="/mzg.png" alt="" />
          </a>
          <a href="https://salt-blog.surge.sh" target="_blank">
            <img className='project-pics' src="/salt.png" alt="" />
          </a>

        </center>
      </div>
      <div className='home-divs-contact'>
        <h1>Contact Me</h1>
        <center>
          <form onSubmit={sendEmail}>

            <input className="inputs" placeholder='Name' type="text" name="Name" /> <br />
            <input className="inputs" placeholder='Email' type="email" name="Email" /> <br />
            <input className="inputs" placeholder='Subject' type="text" name="Subject" /> <br />
            <textarea className="inputs-message" cols="40" rows='10' placeholder='Your Message' name="Message" /> <br />
            <button className="email-button">Send It!</button>
          </form>

        </center>
      </div>

    </div>



  )
}