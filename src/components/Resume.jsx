import resumepic from "../assets/resumepic.png"




export default function Resume() {



  return (
    <div>
      {/* <a href={justinresume}></a> */}
      <center>

      {/* <object className='resume' data={justinresume} type="application/pdf">
        </object> */}
        <img className="resume-pic" src={resumepic} alt=""/>
        <h3><a className="resume-link" href="https://drive.google.com/file/d/1UVq3l-l1QhyRw8UnTGovN7MArThLArM6/view?usp=sharing"
        target="_blank">
        Click here to view and download</a></h3>
      </center>
    </div>



  )
}