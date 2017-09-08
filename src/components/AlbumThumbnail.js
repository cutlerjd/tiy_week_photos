import React, { Component } from 'react'

class AlbumThumbnail extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.thumbnail.urls.thumb} />
                <h4>album title {this.props.id}</h4>
            </div>
        )
    }
}

export default AlbumThumbnail