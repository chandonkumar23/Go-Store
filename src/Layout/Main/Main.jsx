import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import SubTop from "../../Components/Navbar/SubTop/SubTop";
import SectionOne from "../../Components/sections/Section-1/SectionOne";
import SectionTow from "../../Components/sections/Section-1/SectionTow";
import FeaturedTabs from './../../Components/sections/Section-1/Products/Products';

const Main = () => {
    return (
        <div>
            <SubTop/>
            <Navbar></Navbar>
            <Banner></Banner>
            <SectionOne/>
            <SectionTow/>
            <FeaturedTabs />
           
        </div>
    );
};

export default Main;