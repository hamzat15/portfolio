import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  NavN from "./components/Navbar"
import ExampleOne from "./components/profil";
import Footer from './components/footer';
import ZoomEx from "./components/tech";
import ContactUs from "./components/ContactForm";
import About from "./components/info";


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
          <ExampleOne />
          <NavN />
          <About />
          <ZoomEx />
          <ContactUs />
          <Footer />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}
