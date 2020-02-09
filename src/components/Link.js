import React from 'react'

export default (props) => (<a onClick={() => {
    console.log('click', props.to)
}}>
  {props.children}
</a>)