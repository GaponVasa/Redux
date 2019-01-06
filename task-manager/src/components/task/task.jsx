import React, { Component } from "react";
import PropTypes from "prop-types";
import FormCheckInline from "../form-check-inline/form-check-inline";
import Button from "../button/button";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editValue: "",
      editFlag: false,
      completeFlag: false
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

  clickCompletCheckbox = (event) =>{
    console.log('ok');
    console.log('event', event.target.checked);
    const checkedInput = event.target.checked
    const { onclickComplete, currentId } = this.props;
    const { completeFlag } = this.state;
    console.log('completeFlag',completeFlag);
    this.setState({ completeFlag: checkedInput });
    onclickComplete(currentId);
    
  }

  changeValue = event => {
    const value = event.target.value;
    this.setState({ editValue: value });
  };

  render() {
    const { onclickDelete, textTask, currentId } = this.props;
    const { editValue, editFlag, completeFlag } = this.state;
    return (
      <div className="row border rounded m-3">
        <FormCheckInline
          classNameInline={"col-10 p-3 mr-0"}
          textTask={textTask}
          onclick={this.clickCompletCheckbox}
          flagInput={editFlag}
          completeFlag={completeFlag}
          editvalue={editValue}
          onchange={this.changeValue}
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
  currentId: PropTypes.number
};

export default Task;
