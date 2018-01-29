const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = 
{
	entry: ["./js/app.js"],
	output: 
	{
		path: path.resolve(__dirname, "dist"),
		filename: "js/terence.js"
	},
	devServer:
	{
		contentBase: "./dist"
	},
	module: 
	{
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: 
			{
	  			loader: "babel-loader"
			}
		},
		{
			test: /\.html$/,
			use: [
			{
				loader: "html-loader"
			}]
		}]
	},
	plugins: [
	new HtmlWebPackPlugin(
	{
		template: "./index.html",
		filename: "./index.html"
	})]
};
