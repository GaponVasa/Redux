import React, { Component } from "react";
import PropTypes from "prop-types";
import FormCheckInline from "../components/form-check-inline/form-check-inline";
import Button from "../components/button/button";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editValue: "",
      editFlag: false
    };
  }

  componentDidMount() {
    this.setState({ editValue: this.props.textTask });
  }

  clickEditButton = () => {
    const { onclickEdit, currentId } = this.props;
    const { editFlag, editValue } = this.state;
    if (editFlag) {
      this.setState({ editFlag: false });
      onclickEdit(currentId, editValue);
    } else {
      this.setState({ editFlag: true });
    }
  };

  clickCompletCheckbox = () => {
    const { onclickComplete, currentId } = this.props;
    onclickComplete(currentId);
  };

  changeValue = event => {
    const value = event.target.value;
    this.setState({ editValue: value });
  };

  render() {
    const { complete, onclickDelete, textTask, currentId } = this.props;
    const { editValue, editFlag } = this.state;
    return (
      <div className="row border rounded m-3">
        <FormCheckInline
          classNameInline={"col-10 p-3 mr-0"}
          textTask={textTask}
          onclick={this.clickCompletCheckbox}
          flagInput={editFlag}
          editvalue={editValue}
          onchange={this.changeValue}
          complete={complete}
        />
        <div className="col-2 my-3 p-0">
          <Button
            classNameButton={"btn btn-outline-primary"}
            innerText={editFlag ? "Ok" : "Edit"}
            currentId={currentId}
            onclickButton={this.clickEditButton}
          />
          <Button
            classNameButton={"btn btn-outline-danger ml-3"}
            innerText={"Delete"}
            currentId={currentId}
            onclickButton={onclickDelete}
          />
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  onclick: PropTypes.func,
  onclickEdit: PropTypes.func,
  onclickDelete: PropTypes.func,
  textTask: PropTypes.string,
  currentId: PropTypes.number,
  complete: PropTypes.bool
};

export default Task;
