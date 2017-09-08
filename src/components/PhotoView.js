import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class PhotoView extends Component {
    static defaultProps = {
        photoId: 0,
        albumId: 0,
        photo:{
            id:'',
            urls:{
                regular:''
            }
        }
    }
    render() {
        return (
            <div className="wrapper">
                <div className="navbar">
                    <p>TITLE {this.props.match.params.photoId} - Album {this.props.match.params.albumId}</p>
                    <p>Photo {this.props.photo.id}</p>
                </div>
                <div className="container">
                <img src={this.props.photo.urls.regular} />
            </div>
            </div>
        )
    }
}
function mapStateToProps(appState,ownProps){
    if(appState.albums.length >0){
        let album = appState.albums.filter(function(album){
            return album.id == ownProps.match.params.albumId
        })[0]
        let photo = album.photos.filter(function(photo){
            return photo.id == ownProps.match.params.photoId
        })[0]
        console.log(photo)
        return{
            photo:photo
        }
    }
    return {}

}
export default connect(mapStateToProps)(PhotoView)