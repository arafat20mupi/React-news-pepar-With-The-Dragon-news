import { FaGoogle,FaGithub  } from "react-icons/fa";
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
        </div>
    );
};

export default RightSideNav;