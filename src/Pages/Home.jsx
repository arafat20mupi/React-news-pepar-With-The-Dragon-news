import BreakingNews from "./Shared/BreakingNews";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav";
import Navber from "./Shared/Navber";
import RightSideNav from "./Shared/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <div className="grid grid-cols-1 md:grid-cols-4 ">
                <div><LeftSideNav></LeftSideNav> </div>
                <div className="md:col-span-2"> News reading page</div>
                <div><RightSideNav></RightSideNav> </div>
            </div>
        </div>
    );
};

export default Home;