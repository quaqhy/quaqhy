import "./sass/app.scss";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { cards } from "./data/Cards";
import { listSocials } from "./data/ListSocials";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />

        <Projects projects={cards} />

        <Contacts listSocials={listSocials} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
