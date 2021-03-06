import React from 'react'
import {connect} from 'react-redux'
import * as R from 'ramda'

import { getTotalPrice, getBasketPhonesWithCount } from '../../selectors'
import {removeFromBasket, clearBasket, basketCheckout} from '../../actions'
import { Link } from 'react-router-dom'

const Basket = ({phones, totalPrice, removeFromBasket, clearBasket, basketCheckout}) => {
  const isBasketEmpty = R.isEmpty(phones)
  const renderSidebar = () => (
    <div>
      <Link to='/' className='btn btn-info'>
        <span className='glyphicon glyphicon-info-sign'></span>
        <span>Back to shopping!</span>
      </Link>
      {!isBasketEmpty && 
      <div>
        <button onClick={clearBasket} className='btn btn-danger'>
          <span className='glyphicon glyphicon-trash'></span>
          Clean cart
        </button>
        <button className='btn btn-success' onClick={() => basketCheckout(phones)}>
          <span className='glyphicon glyphicon-envelope'></span>
          Checkout
        </button>
      </div>
      }
    </div>
  )
  const renderContent = () => (
    <div>
      {isBasketEmpty && <div>!!!</div>}
      <div className='table-responsive'>
        <table className='table-bordered table-striped table-condensed cf'>
          <tbody>
            {phones.map((phone, index) => (
              <tr key={index} className='item-checout'>
                <td className='first-column-checkout'>
                  <img className='img-thumbnail' src={phone.image} alt={phone.name} />
                </td>
                <td>{phone.name}</td>
                <td>${phone.price}</td>
                <td>{phone.count}</td>
                <td>
                  <span className='delete-cart' onClick={() => removeFromBasket(phone.id)} ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!isBasketEmpty && 
      <div className='row'>
        <div className='pull-right total-user-checkout'>
          <b>Total</b>
          ${totalPrice}
        </div>
      </div> }
    </div>
  )

  return (
    <div className='view-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            {renderContent()}
          </div>
          <div className='col-md-3 btn-user-checkout'>
            {renderSidebar()}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalPrice(state)
  }
}

const mapDispatchtoProps = {
  removeFromBasket,
  clearBasket,
  basketCheckout
}

export default connect(mapStateToProps, mapDispatchtoProps)(Basket)
