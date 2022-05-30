import React  from "react";


class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    num:0,
    courselevel:"",
  }
 

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === ""||this.state.num===0) {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" ,num:0,courselevel:""});
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Contact NUmber</label>
            <input
              type='number'
              name="contact"
              placeholder="Phone Number"
              value={this.state.num}
              onChange={(e) => this.setState({ num: e.target.value })}
            />
          </div>
          <div className="field">
            <label>courselevel</label>
            <select
              placeholder="UG or PG"
              value={this.state.courselevel}
              onChange={(e) => this.setState({ courselevel: e.target.value })}
            >
            <option>select</option>
            <option>UG</option>
            <option>PG</option>
            </select>
          </div>
         
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
