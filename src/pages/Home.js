import "./Home.css";
import Navbar from "./Navbar";
import myImage from "./img/image10.png"

const Home = () => {
  return (
    <>
      <Navbar />
     <div className="wrapper">
      <div className="overlay"> 
      <div className="container1">




      <div id="home-info">
      
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 lizel">
              <div className="card">
              <h3 className=" display-3 text-center  pt-5 mb-5">
              Hi! I'm Donnavee Garcia!
              </h3>
              <h4 className="text-center text-center mt-5"> Studying In Central Philippines State University (CPSU)</h4>
              <h4 className="text-center text-center mt-5">Bachelor of Science In Information Technology</h4>
              <h4 className="text-center text-center mt-5"> I enjoy reading books and listening to my favorite songs of Taylor Swift!</h4>
              <br />
              <ul>
               <center><h5></h5></center> 
              </ul>
               <center>
                <a href="" className="btn btn-brand shadow">
                  Click Here
                </a>
               </center>
              </div>
            </div>
            <div className="col-lg-6 img">
            <div className="card">
            <img src={myImage}/>
            </div>
            </div>
          </div>
        </div>
      </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Home;
