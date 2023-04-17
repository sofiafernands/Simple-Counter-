import React from "react";


const SecondCounter = (props) => {
    let {number} = props;
    console.log(number)
    return( 
    <div className="text-center" style={{background:"black", height:"110px", width:"500px", margin:"0 auto",marginTop:"80px",borderRadius:"20px"}}>
         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            <div className="col">  <p style= {{color:"white",marginTop:"10%",fontSize:"60px"}}>🕝</p></div>
            <div className="col">  <p style= {{color:"white",marginTop:"40%",fontSize:"40px"}}> 0 </p>  </div>
            <div className="col">  <p style= {{color:"white",marginTop:"40%",fontSize:"40px"}}> 0 </p> </div>
            <div className="col">  <p style= {{color:"white",marginTop:"40%",fontSize:"40px"}}> 0  </p> </div>
            <div className="col">  <p style= {{color:"white",marginTop:"40%",fontSize:"40px"}}> 0 </p> </div>
            <div className="col">  <p style= {{color:"white",marginTop:"40%",fontSize:"40px"}}>{number}</p> </div>
        </div>
      
    </div>

    );
}
export default SecondCounter;
