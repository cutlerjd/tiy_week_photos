import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class PhotoThumbnail extends Component {
    static defaultProps = {
        photo:{
            urls:{
                thumb:''
            }
        },
        id:''
    }
    render() {
        return (
            <Link to={"/album/" + this.props.albumId + "/" + this.props.id}>
            <Card className="card">
            <CardMedia>
            <img src={this.props.thumb} />
            </CardMedia>
            </Card>
            </Link>
        )
    }
}

export default PhotoThumbnail