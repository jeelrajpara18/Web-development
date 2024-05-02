import {motion} from 'framer-motion'
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import linkdin from '../../assets/img/linkdin.png';
import youtube from '../../assets/img/youtube.png';
import './navbar.scss'
// import Sidebar from '../sidebar/sidebar';
const Navbar = () => {
    return(
        <>
        <div className="navbar">
            {/* <Sidebar/> */}
            <div className="wrapper">
                <motion.span
                initial = {{opacity : 0 , scale : 0.5}}
                animate = {{opacity : 1 , scale : 1}}
                transition={{duration : 0.5}}
                >
                    Jeel Dev
                </motion.span>
                <div className='social'>
                    <a href='#'>
                        <img src={facebook} alt=''/>
                    </a>
                    <a href='#'>
                        <img src={instagram} alt=''/>
                    </a>                    
                    <a href='#'>
                        <img src={linkdin} alt=''/>
                    </a>
                    <a href='#'>
                        <img src={youtube} alt=''/>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar