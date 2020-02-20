import Link from 'next/link'
import Image from '../components/Image'
const About = () => {
    return (
        <div style={{fontSize: '20px', color: 'blue'}}>
            <h1>forgot ABOUT dre</h1>
            <Link href="/index">
                <button>back</button> 
            </Link>
            <Image />
        </div>


    );
}

export default About;