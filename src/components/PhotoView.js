import React, { Component } from 'react'

class PhotoView extends Component {
    static defaultProps = {
        photoId: 0,
        albumId: 0
    }
    render() {
        return (
            <div className="wrapper">
                <div className="navbar">
                    <p>TITLE {this.props.match.params.photoId} - Album {this.props.match.params.albumId}</p>
                </div>
                <div className="container">
                <img src="http://via.placeholder.com/450x450" />
            </div>
            </div>
        )
    }
}

export default PhotoView