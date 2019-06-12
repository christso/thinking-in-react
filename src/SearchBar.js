import React from 'react';

class SearchBar extends React.Component {
  handleInStockChange = () => {
    this.props.onInStockChange();
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
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