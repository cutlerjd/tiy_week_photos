import React, { Component } from 'react'
import PhotoThumbnail from './PhotoThumbnail'
import { connect } from 'react-redux'
import SideNavBar from './SideNavBar'
import AppBar from 'material-ui/AppBar';
import {openNav} from '../actions/photoActions'

class AlbumView extends Component {
    static defaultProps = {
        id: 0,
        album: {
            photos: [
                { id: 0,
                urls:{
                    thumb:''
                } }
            ]
        },
        albums:[],
    }
    render() {
        return (
            <div>
            <AppBar title={"Album - " + this.props.match.params.id} 
            onLeftIconButtonTouchTap={openNav} className="appBar"
            />
            <div className="wrapper">
                <SideNavBar albums={this.props.albums}/>
                <div className="mainContent eightyPercent">
                    <div className="container">
                        {this.props.album.photos.map(photo => <PhotoThumbnail key={photo.id} albumId={this.props.album.id} id={photo.id} thumb={photo.urls.thumb} />)}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
function mapStateToProps(appState, ownProps) {
    if(appState.albums.length >0){
        let album = appState.albums.filter(function(album){
            return album.id == ownProps.match.params.id
        })[0]
        return{
            album:album,
            albums:appState.albums,
            open:appState.open
        }
    }
    return {}

}
export default connect(mapStateToProps)(AlbumView)