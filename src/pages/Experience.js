import "./Experience.css";
import Navbar from "./Navbar";
import pic1Image from "./img/image0.jpeg"
import pic2Image from "./img/image1.jpeg"
import pic3Image from "./img/image2.jpeg"
import pic4Image from "./img/image5.jpeg"
import pic5Image from "./img/image7.jpeg"
import pic6Image from "./img/image9.jpeg"
import pic7Image from "./img/image8.jpeg"
import pic8Image from "./img/image10.jpeg"
import pic9Image from "./img/image02.jpeg"
import pic10Image from "./img/image13.jpeg"
import pic11Image from "./img/image14.jpeg"
import pic12Image from "./img/pic12.jpeg"



const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="bg-secondary bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Experience Page
              </h1>
            </div>
          </div>
        </div>
      </div>

     <div className="exp">
      <div className="container">
        <hr/>
        <div className="row mb-5">
          <h3 className="text-center">On-The Job Training</h3>
          <hr/>
          <div className="col-lg-6 text-center">
            <img className="one" src={pic1Image} />
            <h4 ></h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic2Image} />
            <h4 ></h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic3Image} />
            <h4> </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic4Image} />
            <h4 > </h4>
          </div>
        </div>
        <hr />
        <div className="row mb-5">
          <h3 className="text-center">Capstone Project</h3>
          <hr/>
          <div className="col-lg-6">
            <img className="one" src={pic5Image} />
            <h4> </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic6Image} />
            <h4 > </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic7Image} />
            <h4 > </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic8Image} />
            <h4> </h4>
          </div>
        </div>
        <div className="row mb-5">
          <h3 className="text-center">School Work & Activities</h3>
          <hr/>
          <div className="col-lg-6">
            <img className="one" src={pic9Image} />
            <h4>School Activity </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic10Image} />
            <h4>Clean-up drive</h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic11Image} />
            <h4 >Clean-up drive </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={pic12Image} />
            <h4>BSIT 4-A </h4>
          </div>
        </div>
      </div>
     </div>

    </>
  );
};

export default Experience;
