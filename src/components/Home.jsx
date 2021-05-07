




export default function Home() {



  return (
    <div>
      <div className="home-header">
        <h1 className='justin-title'><em>Hello World.</em><br />
       I'm Justin,<br />Web Developer</h1>
        <img className='justin-picture' src="/justin.JPG" alt="" />
      </div>
      <div className='home-divs'>
        <h1>What I do?</h1>
        <p> I'm a passionate full-stack developer. I build web-applications
        for a variety of needs. I make efficient, user-friendly app's, with
        several web-technologies. I specialize in React.js on the front-end, and
        Ruby on Rails for the back-end. I currently work remote as a freelance developer
        and I am always able to take on new projects. Need some help building a website?
        <h3 style={{ color: '#2AB67B', textAlign: 'center' }}>Contact me</h3></p>
      </div>
      <div className='home-divs'>
        <h1>My Portfolio</h1>
        <p>Below, you can find some projects I've created. Feel free to click
         and browse around
        </p>
      </div>


    </div>



  )
}