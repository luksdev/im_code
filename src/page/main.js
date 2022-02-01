import NavBar from '../containers/header/navbar';
// import Contact from '../containers/sections/contact/contact';
import Home from '../containers/sections/home/home';
import Project from '../containers/sections/project/project';
// import Team from '../containers/sections/team/team';

// import GlobalStyle from '../styles/global';

function Main() {
  return (
    <div className="root">
      <NavBar />
      <Home />
      <Project />

      {/* <Contact />
      <Team /> */}
    </div>
  );
}

export default Main;
