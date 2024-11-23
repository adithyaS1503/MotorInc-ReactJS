import './Home.css';
import bgVideo from './duke250.mov';

function Home() {
  return (
    <>
      <div className='body'>
        <video className='bgVideo' src={bgVideo} autoPlay loop muted></video>
        <h1 className='firstClass'>MotorInc</h1>
        <p className='desc'>
          We are a movement about movement. We help you move better; through the world and towards your dreams.
          Embrace the journey, ride with purpose, and let every mile bring you closer to your aspirations. Together, we navigate 
          the roads of ambition and adventure.
        </p>
      </div>
      
      <div className='line'>
        <h1 className='part1'>What we aren't is </h1>
        <h1 className='part2'> BIASED</h1>
      </div>
    </>
  );
}

export default Home;
