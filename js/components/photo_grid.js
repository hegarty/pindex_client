import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
//import store from "../store/index";
//import { results } from "../actions/index";
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
const mapStateToProps = state => {
	/*
	console.log('okk'+state.results);
	
	if(typeof state != 'undefined' && typeof state.results[0] != 'undefined')
	{
		console.log('total: '+state.results.length);
		console.log(JSON.stringify(state.results));	
		state.results.map((el,index) => ( console.log(index,JSON.stringify(el[index]))))
  	}
	*/
	return { results: state.results };
};

const grid = ({ results }) => 
(
	<section className="masonry">
    {
		results.map((el,index) => 
		(
			
			el.map((z) => 
			(
      			<figure key={z._source.resource} className="grid-item"><img src={z._source.resource} className="photo" /></figure>
			))
			
    	))
	}
  	</section>
);


const Photo_grid = connect(mapStateToProps)(grid);
export default Photo_grid;

//const wrapper = document.getElementById("photo_grid");
//wrapper ? ReactDOM.render(<Photo_grid />, wrapper) : false;

