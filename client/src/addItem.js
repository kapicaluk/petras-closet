import React, { Component } from "react";

class addItem extends Component {
  constructor() {
    super();
    this.state = {
      newItem: {
        title: "Give your listing a title",
        description: "A couple words about the item...",
        price: "$$$",
        picture: "",
        category: { value: "0-3 months" }
      }
    };
  }
  render() {
    return (
      <div className="form-container">
      <fieldset>
      <form className="form" noValidate name="addItem">
            <legend>Post a new listing</legend>
            <label>
              Title:
              <input type="text" value={this.state.newItem.title} />
            </label>
            <label>
              Description:
              <input type="text" value={this.state.newItem.description} />
            </label>
            <label>
              Price:
              <input type="text" value={this.state.newItem.price} />
            </label>
            <label>
              Picture:
              <input type="text" value={this.state.newItem.picture} />
            </label>
            <label>
              Category:
              <select>
                <option value="0-3 months">0-3 months</option>
                <option value="6-12 months">6-12 months</option>
                <option selected value="12-18 months">
                  12-18 months
                </option>
                <option value="18-24 months">18-24 months</option>
                <option value="2T">2T</option>
              </select>
            </label>
            </form>
          </fieldset>
      </div>
    );
  }
}

export default addItem;
