import React from 'react';
import { connect } from 'react-redux';
import Todo from './Sticky';

const StickyList = ({ stickies }) => (
  <ul>
    { stickies.map( (t) => {
      return  ( <Todo key={t.id} {...t} /> )
    })
  }
  </ul>
)

const mapStateToProps = (state) => {
  return { stickies: state.stickies }
}

export default connect(mapStateToProps)(StickyList)