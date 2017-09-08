import React, { Component } from 'react'
import PhotoThumbnail from './PhotoThumbnail'

class AlbumView extends Component {
    static defaultProps = {
        id: 0
    }
    render() {
        return (
            <div className="wrapper">
                <div className="sidebar twentyPercent">
                    <div className="card">
                        <h4>album title</h4>
                    </div>
                    <div className="card">
                        <h4>album title</h4>
                    </div>
                    <div className="card">
                        <h4>album title</h4>
                    </div>
                </div>
                <div className="mainContent eightyPercent">
                    <h3>title {this.props.match.params.id}</h3>
                    <div className="container">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (<PhotoThumbnail id={i} />))}
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumView