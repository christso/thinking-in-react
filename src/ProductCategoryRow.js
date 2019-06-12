import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    console.log(this.props.category); 
    return (
      <tr><th colSpan={2}>{this.props.category}</th></tr>
    );
  }
}

export default ProductCategoryRow;