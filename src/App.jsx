import "./App.css";
import Navbar from "./components/Navbar";

//Importo componentes
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <>
            <Navbar />
            <About />
            <Gallery />
            <Footer />
        </>
    );
}

export default App;
