'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {toggleSidebar} from '../actions/sidebar'
import Sidebar from '../components/sidebar'

export const ByService = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    isExpanded: React.PropTypes.bool.isRequired
  },

  // This method gets passed to the sidebar, it
  // gets wired up to the toggle button. It's job
  // is to tell redux we want to toggle the sidebar.
  handleToggle (event) {
    event.preventDefault()
    this.props.dispatch(toggleSidebar())
  },

  render () {
    // The event handler from above
    const handleToggle = this.handleToggle

    // We get this automagically from redux, at
    // any point in time this will be true or false
    // it always starts out as true when the app starts.
    const {isExpanded} = this.props

    // This is the style class for the byservice panel or page to the right of the
    // sidebar. Feel free to use whatever classes you want. It's a basic, if expanded
    // use 'byservice-panel-expanded' class otherwise use 'byservice-panel'
    var styleClass = 'page-wrapper'
    if (isExpanded) {
      styleClass = styleClass + '-expanded'
    }

    return (
      // I don't do anything special with this as it's just a container
      <div className={styleClass}>
        <Sidebar isExpanded={isExpanded} onToggle={handleToggle} />
        <div className="page container-fluid">
          <div className="row middle-xs">
            <h2 className="col-xs-12 col-sm-6">Overview</h2>
            <div className="col-xs-12 col-sm-6 txt-right">
              <select>
                <option>120 seconds</option>
                <option>5 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
              </select>
            </div>
        </div>
        </div>
      </div>
    )
  }
})

// This code is the magic that lets redux update our control with new state
// implicitly. You don't need to care about this. You only need to care that
// at some point in time isExpanded will be true or false. Redux causes a
// redraw we simply work with the data as it is presented to us.
function mapStatesToProps (state) {
  const {sidebar} = state

  return {
    isExpanded: sidebar.isExpanded
  }
}

export default connect(mapStatesToProps)(ByService)
