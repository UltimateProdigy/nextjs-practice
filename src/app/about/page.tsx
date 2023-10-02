import "./about.css";
import Image from "next/image";
import DP from "../assets/images/MY DP.jpg"

type imageProps = {
  src: any;
};

const About = () => {
  return (
    <div>
      <h1>Welcome to About Page</h1>
      <Image src={DP} alt="dp" style={{borderRadius: "500px"}}/>
    </div> 
  );
};

export default About;
