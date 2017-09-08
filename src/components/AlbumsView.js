import React, { Component } from 'react'
import AlbumThumbnail from './AlbumThumbnail'
import {connect} from 'react-redux'

class AlbumsView extends Component {
    render() {
        return (
            <div className="wrapper">
            <div className="navbar">
                <p>Photo App</p>
            </div>
            <div className="container">
            {this.props.albums.map(album=>{
                return <AlbumThumbnail key={album.id} id={album.id} thumbnail={album.photos[0]}/>
            })}
            </div>
        </div>	
                )
    }
}
function mapStateToProps(appState){
    return {
        albums:appState.albums
    }
}

export default connect(mapStateToProps)(AlbumsView)