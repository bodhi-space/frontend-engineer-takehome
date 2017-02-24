import ReactDOM from 'react-dom';
import TopSalesList from "../dist/TopSalesList/index.js";
import TransformData from "../dist/Utils/transformData.js";
import request from 'request';

request.get('http://localhost:3000/PurchaseOrders', function (error, response, body) {
  console.log('body:', body); // Print the HTML for the Google homepage.
});


