import Feature from "../Feature/Feature";
import HomeSlider from "../HomeSlider/HomeSlider";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularClasses from "../popularClasses/popularClasses";

const Home = () => {
    return (
        <>
            <HomeSlider />
            <PopularClasses />
            <PopularInstructor />
            <Feature />
        </>
    );
};

export default Home;