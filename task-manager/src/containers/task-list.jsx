import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "../components/task/task";
import randomId from "../others/random_id";

class TaskList extends Component {
  render() {
    const { onclickEdit, onclickDelete, onclickComplete, storeArray } = this.props;
    return (
      <div className="d-flex flex-column tasks">
        {storeArray.map(el => {
          return (
            <Task
              key={randomId()}
              textTask={el.bodyTask}
              currentId={el.id}
              onclickEdit={onclickEdit}
              onclickDelete={onclickDelete}
              onclickComplete={onclickComplete}
            />
          );
        })}
      </div>
    );
  }
}

TaskList.propTypes = {
  onclickEdit: PropTypes.func,
  onclickDelete: PropTypes.func,
  onclickComplete: PropTypes.func,
  storeArray: PropTypes.array
};

export default TaskList;
