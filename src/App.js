import "./app.scss";

import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const cards = [
  {
    name : "quiz",
    srcImg : "/imgs/quiz.png",
    url : "https://hyquaq.github.io/WebQuestion/",
  },
  {
    name : "count down",
    srcImg : "/imgs/countdown.png",
    url : "https://hyquaq.github.io/25m/",
  },
  {
    name : "count day",
    srcImg : "/imgs/countday.png",
    url : "https://hyquaq.github.io/count-day/",
  },
  {
    name : "Wallpaper Collection",
    srcImg : "/imgs/desdev1.png",
    url : "https://hyquaq.github.io/desdev-ex1/",
  },
  {
    name : "Card film",
    srcImg : "/imgs/desdev2.png",
    url : "https://hyquaq.github.io/desdev-ex2/",
  },
  {
    name : "toast",
    srcImg : "/imgs/desdev3.png",
    url : "https://hyquaq.github.io/desdev-ex3/",
  },
  {
    name : "Card food",
    srcImg : "/imgs/desdev4.png",
    url : "https://hyquaq.github.io/desdev-ex4/",
  },
  {
    name : "IMDB",
    srcImg : "/imgs/desdev5.png",
    url : "https://hyquaq.github.io/desdev-ex5/",
  },
  {
    name : "pages",
    srcImg : "/imgs/desdev7.png",
    url : "https://hyquaq.github.io/desdev-ex7/",
  },
  {
    name : "form login",
    srcImg : "/imgs/desdev9.png",
    url : "https://hyquaq.github.io/desdev-ex9/",
  },
];

const listSocials = [
  {
    url : "https://www.facebook.com/quaqhy/",
    urlImg : "/imgs/icon/facebook.png",
    urlImgHover : "/imgs/icon/facebook-bold.png",
  },
  {
    url : "https://www.youtube.com/channel/UCjjhWyzMfhhkXxc7qcHEdCA/",
    urlImg : "/imgs/icon/youtube.png",
    urlImgHover : "/imgs/icon/youtube-bold.png",
  },
  {
    url : "https://github.com/hyquaq",
    urlImg : "/imgs/icon/github.png",
    urlImgHover : "/imgs/icon/github-bold.png",
  },
];

function App() {
  // console.log(cards);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Projects projects={
    cards} />
        <Contacts listSocials={listSocials} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
