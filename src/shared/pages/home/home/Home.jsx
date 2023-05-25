import Banner from "../banner/Banner";
import Category from "../category/Category";
import CheckMenu from "../checkMenu/CheckMenu";
import CheifService from "../cheifService/CheifService";
import Chiefs from "../cheifs/cheifs";
import Feature from "../feature/Feature";
import Testimonials from "../testimonials/Testimonials";


const Home = () => {
    return (
        <div className="">
            <Banner />
            <Category />
            <CheifService />
            <CheckMenu />
            <Chiefs />
            <Feature />
            <Testimonials />
        </div>
    );
};

export default Home;