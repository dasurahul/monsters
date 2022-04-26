import React from "react";
import CardList from "../../components/card-list/card-list.component";
import Search from "../../components/search/search.component";

import { connect } from "react-redux";

import { getUsers, searchUser } from "../../redux/user/user.action";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const { sendMonsters } = this.props;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((monsters) => {
        sendMonsters(monsters);
      });
  }
  handleOnChange = (event) => {
    const { sendSearchValue } = this.props;
    sendSearchValue(event.target.value);
  };
  render() {
    const { getMonsters, getSearchValue } = this.props;
    const filteredMonsters = getMonsters.filter((monster) =>
      monster.name.toLowerCase().includes(getSearchValue.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <Search changing={this.handleOnChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getMonsters: state.userState.users,
  getSearchValue: state.userState.searchValue,
});

const mapDisptachToProps = (dispatch) => ({
  sendMonsters: (monsters) => dispatch(getUsers(monsters)),
  sendSearchValue: (username) => dispatch(searchUser(username)),
});

export default connect(mapStateToProps, mapDisptachToProps)(App);
