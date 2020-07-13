import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmployeeCard from "./components/projectCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import projects from "./projects.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };

  // Map over this.state.projects and render a project card component for each project
  render() {
    return (
      <div>
        <Header>JCCCHU</Header>
        <div style={{textAlign:"center"}}>
          <ul><strong>Links</strong>
            <li><a href="https://github.com/JCCCHU">Github</a></li>
            <li><a href="https://www.linkedin.com/in/joshua-chu-2510a9b9/">LinkedIn</a></li>
          </ul>
        </div>
        <Wrapper>
          {/*
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={RegisterDiner} />
            <Route exact path="/restLogin" component={LoginRestaurant} />
            <Route exact path="/restRegister" component={RegisterRestaurant} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profilerest" component={ProfileRest} />
            <Route path="/user" component={BoardUser} />
          </Switch>
          */}
          {
          this.state.projects.map(project => (
            <EmployeeCard
              //removeEmployee={this.removeEmployee}
              github={project.github}
              name={project.name}
              /* image={friend.image}*/
              description={project.description}
              deploy={project.deploy}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
