import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom'
import {closeNav} from '../actions/photoActions'

class SideNavBarItem extends Component {
    render() {
        return (
            <Link to={"/album/" + this.props.id}>
                <ListItem
                onClick={closeNav}
                >
                    <p>{"Album " + this.props.id}</p>
                </ListItem>
            </Link>
        )
    }
}

export default SideNavBarItem