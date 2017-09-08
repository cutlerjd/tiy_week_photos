import React, { Component } from 'react'

class PhotoThumbnail extends Component {
    render() {
        return (
            <div className="card">
                <img src="http://via.placeholder.com/350x250" />
                <h4>Photo title {this.props.id}</h4>
            </div>
        )
    }
}

export default PhotoThumbnail