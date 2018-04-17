import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
//import store from "../store/index";
//import { results } from "../actions/index";
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';


const mapStateToProps = state => {

	let len = state.results.length-1;
	return { results: (typeof state.results[0] != 'undefined')? state.results[len] : state.results };
};

const grid = ({ results }) => 
(
	<section className="masonry">
    {
		results.map((el,index) => 
		(
			<figure key={el._source.resource} className="grid-item"><img src={el._source.resource} className="photo" /></figure>
			/*	
			el.map((z) => 
			(
      			<figure key={z._source.resource} className="grid-item"><img src={z._source.resource} className="photo" /></figure>
			))
			*/
    	))
		
	}
  	</section>
);

const Photo_grid = connect(mapStateToProps)(grid);
export default Photo_grid;

