import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { addResults } from "./actions/index";


//import Photo_grid from "./components/photo_grid";
import Search_ui from "./components/search_ui";

render(
  <Provider store={store}>
    <Search_ui />
  </Provider>,
  document.getElementById("create-search-form")
);

