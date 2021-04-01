import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getTotalBasketCount, getTotalPrice} from '../selectors'

const BasketCard = ({totalBasketCount, totalPrice}) => {
  return (
    <div className='cart'>
      <div className='dropdown'>
        <Link to='/basket' id='dlabel' className='btn btn-inverse btn-block btn-lg'>
          <i className='fa fa-fa-shopping-cart'></i>
          <span>{totalBasketCount} item(s) - ${totalPrice}</span>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalPrice: getTotalPrice(state)
  }
}

export default connect(mapStateToProps, null)(BasketCard)
