import React, {Component} from 'react';
import Navbar from "../navbar";
import Product from "../products";
import products from "../../assets/product";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <br/><br/><br/>
                <Product products={products}/>
            </div>
        );
    }
}

export default Dashboard;