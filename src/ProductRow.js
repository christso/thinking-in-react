import React from 'react';
import PropTypes from 'prop-types'

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <tr>
        <td className={product.stocked ? '' : 'text-warn'}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductRow;