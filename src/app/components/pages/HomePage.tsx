import About from "./homeSections/About";
import Contacts from "./homeSections/Contacts";
import Projeckts from "./homeSections/Projects";
import Welcome from "./homeSections/Welcome";


const HomePage = () => {
    return (
        <>
        <Welcome/>
        <About/>
        <Projeckts/>
        <Contacts/>
        </>
    );
};

export default HomePage;