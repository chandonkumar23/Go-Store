import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import SubTop from "../../Components/Navbar/SubTop/SubTop";
import SectionOne from "../../Components/sections/Section-1/SectionOne";
import SaleSection from "../../Components/sections/Section-1/SectionThree";
import SectionTow from "../../Components/sections/Section-1/SectionTow";
import FeaturedTabs from './../../Components/sections/Section-1/Products/Products';
import ProductCarousel from './../../Components/sections/Section-1/Products/ProductCaro';
import StatisticsSection from "../../Components/sections/Section-1/SectinFour";

const Main = () => {
    return (
        <div>
            <SubTop/>
            <Navbar></Navbar>
            <Banner></Banner>
            <SectionOne/>
            <SectionTow/>
            <FeaturedTabs />
            <SaleSection/>
            <ProductCarousel/>
            <StatisticsSection/>
           
        </div>
    );
};

export default Main;