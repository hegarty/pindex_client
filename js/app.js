import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { addResults } from "./actions/index";

import Photo_grid from "./components/photo_grid";
import Search_ui from "./components/search_ui";

render(
	<Provider store={store}>
    	<Photo_grid />
  	</Provider>,
  document.getElementById("photo_grid")
);

render(
    <Provider store={store}>
        <Search_ui />
    </Provider>,
  document.getElementById("search_form")
);

//const wrapper = document.getElementById("create-search-form");
//wrapper ? ReactDOM.render(<Search_ui />, wrapper) : false;

