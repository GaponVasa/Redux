import React, { Component } from "react";

import PropTypes from "prop-types";
import InputGroup from "./components/input-group/input-group";
import FormCheckInline from "./components/form-check-inline/form-check-inline";
import "./App.css";
import Header from "./containers/header";
import TaskList from "./containers/task-list";
import { actionAddTask, actionDeleteTask, actionEditTask, actionCompleteTask } from "./store/store";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addValue: "",
      searchValue: ""
    };
  }

  onchangeAddValue = event => {
    const textValue = event.target.value;
    this.setState({ addValue: textValue });
  };

  onchangeSearchValue = event => {
    const textValue = event.target.value;
    this.setState({ searchValue: textValue });
  };

  onclickAddButton = () => {
    const { actionAddTask } = this.props;
    actionAddTask(this.state.addValue);
    this.setState({ addValue: "" });
  };

  onclickDeleteButton = event => {
    const { actionDeleteTask } = this.props;
    const currentId = event.target.getAttribute("data-currentid");
    actionDeleteTask(currentId);
  };

  onclickCompleteButton = currentId => {
    console.log('App   actionCompleteTask')
    const { actionCompleteTask } = this.props;
    actionCompleteTask(currentId);
  };

  onclickEditButton = (currentId, currentValue) => {
    const { actionEditTask } = this.props;
    actionEditTask(currentId, currentValue);
  };

  onclick = () => {
    console.log("click");
  };

  render() {
    console.log("App this.props", this.props);
    const { tasks } = this.props;
    const { addValue, searchValue } = this.state;
    return (
      <div className="container d-flex flex-column border my-3">
        <Header
          classNameInputGroup={"input-group mr-0"}
          classNameButton={"btn btn-outline-secondary"}
          idButton={"button-addon"}
          innerText={"Search"}
          onclickButton={this.onclick}
          values={searchValue}
          onChange={this.onchangeSearchValue}
        />
        <div className="row m-3">
          <InputGroup
            classNameInputGroup={"input-group col-12 px-0"}
            classNameButton={"btn btn-outline-secondary"}
            idButton={"button-addon"}
            innerText={"Add task"}
            onclickButton={this.onclickAddButton}
            values={addValue}
            onChange={this.onchangeAddValue}
          />
        </div>
        <TaskList
          onclickEdit={this.onclickEditButton}
          onclickDelete={this.onclickDeleteButton}
          onclickComplete={this.onclickCompleteButton}
          storeArray={tasks}
        />
        <div className="row m-3">
          <FormCheckInline
            textTask={"Check all tasks"}
            onclick={this.onclick}
            flagInput={false}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array
};

const putStateToProps = state => {
  return {
    tasks: state.tasks,
    filtered: state.filtered
  };
};

const putActionToProps = dispatch => {
  return {
    actionAddTask: bindActionCreators(actionAddTask, dispatch),
    actionDeleteTask: bindActionCreators(actionDeleteTask, dispatch),
    actionCompleteTask: bindActionCreators(actionCompleteTask, dispatch),
    actionEditTask: bindActionCreators(actionEditTask, dispatch)
  };
};

export default connect(
  putStateToProps,
  putActionToProps
)(App);
