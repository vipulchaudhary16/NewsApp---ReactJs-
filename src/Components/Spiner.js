import React, { Component } from 'react'
import loading from '../spinner.gif'

export default class Spiner extends Component {
    render() {
        return (
            <div className="text-center"style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <img src={loading} alt="Loading" />
            </div>
        )
    }
}
