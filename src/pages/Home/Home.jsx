import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Overview from "../Overview/Overview";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-3xl my-20 font-poppins">6 Types of brand name  </h1>
            <Overview></Overview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;