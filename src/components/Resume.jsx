import justinresume from "../assets/justinresume.pdf"




export default function Resume() {



  return (
    <div>
      {/* <a href={justinresume}></a> */}
      <center>

      <object className='resume' data={justinresume} type="application/pdf">
      </object>
      </center>
    </div>



  )
}