import Count from "../Count/Count";
import Feature from "../Feature/Feature";
import HomeSlider from "../HomeSlider/HomeSlider";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Services from "../Services/Services";
import Test from "../Test/Test";
import Testimonials from "../Testimonials/Testimonials";
import PopularClasses from "../popularClasses/popularClasses";

const Home = () => {
    return (
        <>
            <HomeSlider />
            <Test />
            <PopularClasses />
            <PopularInstructor />
            <Services />
            <Feature />
            <Count />
            <Testimonials />
        </>
    );
};

export default Home;