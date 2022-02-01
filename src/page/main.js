import NavBar from '../containers/header/navbar';
import Contact from '../containers/sections/contact/contact';
import Home from '../containers/sections/home/home';
import Project from '../containers/sections/project/project';

function Main() {
  return (
    <div className="root">
      <NavBar />
      <Home />
      <Project />
      <Contact />
    </div>
  );
}

export default Main;
