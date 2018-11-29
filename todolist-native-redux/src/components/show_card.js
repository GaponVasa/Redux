import React from 'react';
import PropTypes from 'prop-types';
import Button from './button.js';
import Input from './input.js';

class ShowCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      edit: false
    }
  }

  componentDidMount() {
    this.setState({ value: this.props.textCard });
  }

  edit = () => {
    const { editCard } = this.props;
    let edit = this.state.edit;
    if (edit) {
      this.setState({ edit: false });
    } else {
      this.setState({ edit: true });
      console.log('edit()    ', this.state.value)
      editCard({ id: this.props.keyId, text: this.state.value });
    }
  }

  addInput = () => {
    return (
      <Input
        cssClass={'form-control'}
        type={'text'}
        placeholder={'Recipient\'s username'}
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }

  handleChange = (event) => {
    console.log('handleChange()  ', event.target.value)
    this.setState({ value: event.target.value });
  };

  render() {
    // console.log(this.props.textCard)
    const { deleteCard, keyId } = this.props;
    // console.log(editCard);
    return (
      <div className="d-flex flex-row border p-2 mb-3 card">
        <div className="col-10">
          {this.state.edit ? this.addInput() : this.state.value}
        </div>
        <div className="d-flex flex-column col-2">
          <Button
            cssClass={'btn btn-outline-primary mb-3'}
            onclick={this.edit}
            textButton={this.state.edit ? 'Ok' : 'Edit'}
          />
          <Button
            cssClass={'btn btn-outline-primary mb-3'}
            onclick={() => deleteCard(keyId)}
            textButton={'Delete'}
          />
        </div>
      </div>
    )
  }
}

Button.propTypes = {
  textCard: PropTypes.string,
  editCard: PropTypes.func,
  deleteCard: PropTypes.func,
  keyId: PropTypes.number
};

export default ShowCard;