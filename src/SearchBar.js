import React from 'react';

class SearchBar extends React.Component {
  handleInStockChange = () => {
    this.props.onInStockChange();
  }

  handleFilterChange = (event) => {
    const filterText = event.target.value;
    this.props.onFilterChange(filterText);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." onChange={this.handleFilterChange} />
        <p>
          <input type="checkbox" onChange={this.handleInStockChange} />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}

export default SearchBar;