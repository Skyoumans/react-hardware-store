import React, { Component } from 'react'
import Header from './Header'

class HomePage extends Component {
    // 'extends' simply means that HomePage is inheriting
    // the Component from React
    render () {
        return (
            <div>
                <h1>HomePage</h1>
                <Header />
            </div>
        )
    }
}

export default HomePage