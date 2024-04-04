import { FaGoogle,FaGithub, FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"
const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
                <h3 className="text-2xl font-semibold">Log With</h3>
                <button className="btn btn-outline w-full ">
                    <FaGoogle />
                    log in with google
                </button>
                <button className="btn btn-outline w-full ">
                    <FaGithub />
                    log in with github
                </button>
            </div>
            <div className="p-4 space-y-1 mb-6">
                <h2 className="texl-3xl mb-4"> Find Us on</h2>
                <a className="flex p-4  text-lg items-center border-2 bg-slate-200 rounded-t-lg" href="">
                    <FaFacebook className="mr-5" />
                    Facebook
                </a>
                <a className="flex p-4  text-lg items-center  border-2 bg-slate-200 rounded-t-lg" href="">
                    <FaTwitter className="mr-5"/>
                    Twitter
                </a>
                <a className="flex p-4  text-lg items-center border-2 bg-slate-200 rounded-t-lg" href="">
                    <FaInstagram className="mr-5"/>
                    Instragram
                </a>
            </div>

            <div className="p-4 space-y-3">
                <h3 className="text-2xl font-semibold">Q zone</h3>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;