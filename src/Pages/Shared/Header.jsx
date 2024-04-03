import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex items-center justify-center text-center flex-col'>
            <img src={logo} alt="" />
            <h1 className='text-lg text-gray-900'>Journalism Without Fear or Favour</h1>
            <p className='text-xl font-semibold'>{moment().format("dddd, MMMM D, YYYY")} </p>
        </div>
    );
};

export default Header;