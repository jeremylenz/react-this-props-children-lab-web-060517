import React from 'react'

// Code ThemedDecoration Component Here
class ThemedDecoration extends React.Component {

  render() {
    let propToPass = this.props.theme
    let childrenWithClassName = React.Children.map(this.props.children, child => {
      return React.cloneElement(child,
      {className: propToPass})
    })

  return (
    <div>
      {childrenWithClassName}
    </div>
  )
  }
}

export default ThemedDecoration
