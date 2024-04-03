import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className='btn bg-red-400 text-white hover:text-black'>Breaking News </button>
            <Marquee pauseOnHover={true} speed={200}>
                <Link to={'/'} className="mr-12 no-underline"> I can be a React component, multiple React components, or just some text.</Link>
                <Link to={'/'} className="mr-12 no-underline"> I can be a React component, multiple React components, or just some text.</Link>
                <Link to={'/'} className="mr-12 no-underline"> I can be a React component, multiple React components, or just some text.</Link>
                
            </Marquee>
        </div>
    );
};

export default BreakingNews;