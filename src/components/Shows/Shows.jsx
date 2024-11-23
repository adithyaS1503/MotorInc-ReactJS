import './Shows.css';
import { Link } from 'react-router-dom';
import thiscon from './thisconnect.png';
import vew from './view.png';
import bal from './balance.png';
import first from './first.png';

function Shows() {
    return (
        <>
            <div className='origin'>
                <nav className='show-navs'>

                    <div className='a-show'>
                        <Link to="/tconnect" className='show-links'>
                            <img className='show-image' src={thiscon} alt="ThisConnect" />
                            <div className='text-overlay'>
                                <h1 className='tc-heading'>Our Podcast: ThisConnect</h1>
                                <p className='tc-body'>This is our podcast where we discuss how motorcycles and cars impact our lives.</p>
                            </div>
                        </Link>
                    </div>

                    <div className='b-show'>
                        <Link to="/view" className='show-links'>
                            <img className='show-image' src={vew} alt="View" />
                            <div className='text-overlay'>
                                <h1 className='show-heading'>View</h1>
                                <p className='show-body'>Automotive reviews made for humans (ft eye-candy B-rolls)</p>
                            </div>
                        </Link>
                    </div>

                    <div className='c-show'>
                        <Link to="/balance" className='show-links'>
                            <img className='show-image' src={bal} alt="Balance" />
                            <div className='text-overlay'>
                                <h1 className='show-heading'>Comparisons: Balance</h1>
                                <p className='show-body'>Comparing two vehicles has never looked this good before.</p>
                            </div>
                        </Link>
                    </div>

                    <div className='d-show'>
                        <Link to="/first" className='show-links'>
                            <img className='show-image' src={first} alt="First Impressions" />
                            <div className='text-overlay'>
                                <h1 className='show-heading'>Our (First) Impressions</h1>
                                <p className='show-body'>We highlight what stood out to us and our initial reactions.</p>
                            </div>
                        </Link>
                    </div>

                </nav>
            </div>
        </>
    );
}

export default Shows;
