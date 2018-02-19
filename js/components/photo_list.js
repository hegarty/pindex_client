import React from "react";
import ReactDOM from "react-dom";

import store from "../store/index";
import { results } from "../actions/index";

class Photo_grid extends React.Component {

	constructor()
	{
		super();
		this.handle_onchange = this.handle_onchange.bind(this);
	}

	handle_onchange(event)
	{
		let t = event.target.value;
		//this.search(t);	
	}

	render() { 
		return (
		  <div id="grid">
		  </div>
		);
  	}
}
export default Search_ui;

const wrapper = document.getElementById("photo_grid");
wrapper ? ReactDOM.render(<Photo_grid />, wrapper) : false;
