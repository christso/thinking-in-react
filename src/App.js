import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  handleFilterChange = (filterText) => {
    this.setState(() => ({ filterText: filterText }));
  }

  handleInStockChange = (inStockOnly) => {
    this.setState((currState) => ({ inStockOnly: inStockOnly }));
  }

  render() {
    return (
      <div className="App" style={{textAlign:"left"}}>
        <SearchBar
          onInStockChange={this.handleInStockChange} 
          onFilterChange={this.handleFilterChange} 
          filterText={this.state.filterText}
        />
        <ProductTable products={PRODUCTS}
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default App;
