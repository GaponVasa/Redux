import React from 'react';

class ShowEdit extends React.Component{
  render(){
    return (
      <div className="d-flex flex-row border p-2 mb-3 card">
        <div className="col-10">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Recipient's username" 
            value="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </div>
        <div className="d-flex flex-column col-2">
          <button className="btn btn-outline-primary mb-3">Edit</button>
          <button className="btn btn-outline-primary ">Delete</button>
        </div>
      </div>
    )
  }
}

export default ShowEdit;