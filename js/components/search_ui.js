import React from "react";
import ReactDOM from "react-dom";

import elasticsearch from "elasticsearch";

import { connect } from "react-redux";
import store from "../store/index";
import { addResults } from "../actions/index";

window.store = store;
window.addResults = addResults;

const mapDispatchToProps = dispatch => {
  return {
    addResults: result => dispatch(addResults(result))
  };
};

class Search_ui extends React.Component {

	constructor()
	{
		super();
		this.search = this.search.bind(this);
		//this.props = this.props.bind(this);
		//this.handle_onsubmit = this.handle_onsubmit.bind(this);
	}

	search(t,type,props=this.props)
	{
		let uri = 'https://search-media-tjri2esr2yapx2hwuug7oh6f3y.us-east-1.es.amazonaws.com';
        let client = new elasticsearch.Client(
        {
            host: uri,
            //log: 'trace'
        });
		
		client.search(
        {
            q:t
        })
        .then(function (body)
        {
            let hits = body.hits.hits;
            //console.log('Hits: '+hits);
        	if(type=='submit')
			{
				//console.log('submit made');
				props.addResults(hits);
				//store.dispatch(addResults(hits));
				//this.setState({query:t,displayed_results:hits});
				//render_page(hits);
			}
		},
        function (error)
        {
            //console.trace(error.message);
        });

	}

	handle_onsubmit=({event})=>{
		let t = document.getElementById('q').value
		this.search(t,'submit');
	}


	handle_onchange=(event)=>{
		let t = event.target.value;
		//this.props.addResults(t);
		//this.search(t);	
	}



	render() { 
		return (
		  <form id="search_ui">
			<input 
				type="text" 
				id="q" 
				onChange={this.handle_onchange}
			/>
			<input
				id="s"
				value="Submit"
				type="button"
				onClick = {this.handle_onsubmit}
			/>
		  </form>
		);
  	}
}

const Search_interface = connect(null, mapDispatchToProps)(Search_ui);

export default Search_interface;
//const wrapper = document.getElementById("create-search-form");
//wrapper ? ReactDOM.render(<Search_ui />, wrapper) : false;
