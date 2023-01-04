import React from 'react'
import "./landVid.css";
import boom from "../../asset/Videos/boom.mp4"
import Navbar from '../Navbar/Navbar';
import { Link, useHistory } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ButtonWrapper } from '../Hero/HeroStyles';
import { Button } from '../../globalStyles';
const LandVid = () => {

    const navigate = useHistory();
    const { inView } = useInView({
        rootMargin: "-80px",
      });
    
      const about = () => {
        navigate.push("/aboutNitmun");
      };

  return (
    <>
         <section className="box">
            <div className='overlay'></div>
        <video src={boom} autoPlay loop muted />
        <div className='Content'>
            
        </div>
        {/* <ButtonWrapper>
            <Link to="sign-up">
              <Button big onClick={about} className="register">
                Register
              </Button>
            </Link>
          </ButtonWrapper> */}
      </section>
      
    </>
  )
}

export default LandVid;