import React from "react";
import ReactDOM from "react-dom";
import elasticsearch from "elasticsearch";

class Search_ui extends React.Component {

	constructor()
	{
		super();
		this.handle_onchange = this.handle_onchange.bind(this);
		//this.mapStateToProps = this.mapStateToProps.bind(this);	
		this.state =
		{
			query:'',
			//displayed_results:this.props.results
		}
	}

	m(state) 
	{
  		return 
		{
    		count:'t'
  		};
	}

	search(t,type)
	{
		let uri = 'https://search-media-tjri2esr2yapx2hwuug7oh6f3y.us-east-1.es.amazonaws.com';

        let client = new elasticsearch.Client(
        {
            host: uri,
            log: 'trace'
        });

        client.search(
        {
            q:t
        })
        .then(function (body)
        {
            let hits = body.hits.hits;
            console.log('Hits: '+hits);
        	if(type=='submit')
			{
				this.setState({query:t,displayed_results:hits});
				render_page(hits);
			}
		},
        function (error)
        {
            console.trace(error.message);
        });

	}

	handle_onsubmit(event)
	{
		let t = document.getElementById('q').value
		this.search(t,'submit');
	}


	handle_onchange(event)
	{
		let t = event.target.value;
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
export default Search_ui;

const wrapper = document.getElementById("create-search-form");
wrapper ? ReactDOM.render(<Search_ui />, wrapper) : false;
