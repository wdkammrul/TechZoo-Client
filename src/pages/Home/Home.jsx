import Banner from "../Banner/Banner";
import BrandName from "../BrandName/BrandName";
import ContactUs from "../ContactUs/ContactUs";
import Overview from "../Overview/Overview";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandName></BrandName>
            <Overview></Overview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;