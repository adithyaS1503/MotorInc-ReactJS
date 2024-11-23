import './About.css'
import ride from './ride.png'
import drive from './drive.png'
import set from './set.png'

function About(){
    return(
        <>
        <div className='title-card'>
            {/* <img src={drive} className='title-img'></img>
            <img src={ride} className='title-img'></img> */}
            <img src={set} className='title-img'></img>
            <div className='title-text'>
                <h1 className='about-heading'>Automotive content delivered to you at a relaxed pace. That is what we are about.</h1>
            </div>
        </div>
        <div className='hosts'>
            
        </div>
        </>
    );
}

export default About