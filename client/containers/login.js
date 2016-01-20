'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/auth'

export const Login = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    hasError: React.PropTypes.bool.isRequired
  },

  handleSubmit (event) {
    event.preventDefault()

    const {email, pass} = this.refs
    const {dispatch} = this.props

    dispatch(login(email.value, pass.value))
  },

  render () {
    const {hasError, niceError} = this.props
    let heading = hasError ? niceError : 'Login'

    return (
      <main className="page page-login" role="main">
        <div className="container-fluid">
          <div className="row middle-xs center-xs vertical-center">
            <form className="login-form col-xs-12 col-md-6 col-lg-4 txt-left form-full-width form-panel" onSubmit={this.handleSubmit}>

              <div className="box-header">
                <img className='icon icon-signin' />
                <div className="box-header-titlebar">
                  <span>{heading}</span>
                </div>
              </div>

              <input ref="email" type="email" placeholder="Email" className="input-large" required />
              <input ref="pass" type="password" placeholder="Password" className="input-large" required />
              <button type="submit" className="btn btn-large submit"><span>Submit</span></button>
            </form>
          </div>
        </div>
      </main>
    )
  }
})

function mapStatesToProps (state) {
  const {auth} = state

  return {
    hasError: auth.hasError,
    niceError: auth.niceError
  }
}

export default connect(mapStatesToProps)(Login)
