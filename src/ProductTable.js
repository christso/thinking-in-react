import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component {
  render() {
    const { products, inStockOnly, filterText } = this.props;
    products.sort((a, b) => b.name > a.name ? 1 : a.name > b.name ? -1 : 0);
    const rows = [];
    let oldCategory = '';
    products.forEach(product => {
      if (product.category !== oldCategory) {
        rows.push(<ProductCategoryRow key={product.category} category={product.category} />)
        oldCategory = product.category;
      }
    if ((product.stocked || !inStockOnly) 
      && (filterText === '' || product.name.toLowerCase().includes(filterText.toLowerCase()))) {
      rows.push(<ProductRow key={product.name} product={product} />);
    }
      
    });
    return (
      <div>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;