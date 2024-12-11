import Content3 from "./components/contenet3";
import Content from "./components/content";
import Content2 from "./components/content2";
import Content4 from "./components/content4";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Sponsors from "./components/sponsors";
import Tasky from "./components/tasky";

function Home (){
    return(
        <div>
       <Navbar/>
       <Hero/>
       <Content/>
       <Content2/>
       <Content3/>
       <Content4/>
       <Tasky/>
       <Sponsors/>
       < Footer/>
        </div>
    );
}

export default Home;