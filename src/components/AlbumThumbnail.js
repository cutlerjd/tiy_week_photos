import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardTitle} from 'material-ui/Card';

class AlbumThumbnail extends Component {
    render() {
        return (
            <Link to={"/album/" + this.props.id}>
                <Card className="card">
                    <CardMedia>
                        <img src={this.props.thumbnail.urls.thumb} alt="" />
                    </CardMedia>
                    <CardTitle title={<CardTitle title={"Album " + this.props.id}/>}/>
                </Card>
            </Link>
        )
    }
}

export default AlbumThumbnail