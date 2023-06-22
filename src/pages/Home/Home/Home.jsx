import Feature from "../Feature/Feature";
import HomeSlider from "../HomeSlider/HomeSlider";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Testimonials from "../Testimonials/Testimonials";
import PopularClasses from "../popularClasses/popularClasses";

const Home = () => {
    return (
        <>
            <HomeSlider />
            <PopularClasses />
            <PopularInstructor />
            <Feature />
            <Testimonials />
        </>
    );
};

export default Home;