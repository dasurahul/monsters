import React from "react";
import CardList from "../../components/card-list/card-list.component";
import Search from "../../components/search/search.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchValue: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((monsters) => {
        this.setState({ users: monsters });
      });
  }
  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };
  render() {
    const { users, searchValue } = this.state;
    const filteredMonsters = users.filter((user) => {
      return user.name.toLowerCase().includes(searchValue);
    });
    return (
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <Search changing={this.handleOnChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
