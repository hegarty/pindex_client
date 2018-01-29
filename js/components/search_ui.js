import React from "react";
import ReactDOM from "react-dom";
class Search_ui extends React.Component {
	constructor()
	{
		super();
	}

	es_fetch(q) 
	{
    	let _self = this;
		fetch('https://www.reddit.com/r/' + url + '.json').then(function (response) 
		{
        	return response.json();
      	}).then(function (result) 
		{

        //console.log(result.data.children);

        _self.setState({ posts: result.data.children, lastPostName: result.data.children[result.data.children.length - 1].data.name });

        console.log(that.state.posts);
      });
    }

	handle_onchange(event)
	{
		let t = event.target;
		let uri = 'https://search-media-tjri2esr2yapx2hwuug7oh6f3y.us-east-1.es.amazonaws.com/_search/';
		let b ={   
			"query":
			{   
				"query_string":
				{   
					"query":t
				}
			}
		}
	
	
		let init = 
		{
      		method: 'POST',
      		headers: new Headers({'Content-Type':'application/json'}),
    		body:b
		};

		
		fetch(uri, init).then(function(response) 
		{ 
			return response.json();}).then(function(json) 
		{
			console.log("Hits: "+json.hits.total);
			let len = json.hits.total;
			let p = json.hits.hits;
			for(var i = 0; i < len; i++) 
			{
				console.log("P: "+p[i]._source.resource);		
        		/*
				var listItem = document.createElement('li');
        		listItem.innerHTML = '<strong>' + json.products[i].Name + '</strong>';
        		listItem.innerHTML +=' can be found in ' + json.products[i].Location + '.';
        		listItem.innerHTML +=' Cost: <strong>£' + json.products[i].Price + '</strong>';
        		myList.appendChild(listItem);
      			*/
			}
			
    	});

		



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
				type="submit"
			/>
		  </form>
		);
  	}
}
export default Search_ui;

const wrapper = document.getElementById("create-search-form");
wrapper ? ReactDOM.render(<Search_ui />, wrapper) : false;
