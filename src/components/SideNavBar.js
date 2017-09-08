import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List';
import SideNavBarItem from './SideNavBarItem'
import Drawer from 'material-ui/Drawer';
import {connect} from 'react-redux'

class SideNavBar extends Component {
    static defaultProps = {
        open: false
    }

    componentWillReceiveProps(props){
        console.log(props)
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <Drawer open={this.props.open}>
                    <List>
                        {this.props.albums.map(i => (<SideNavBarItem key={i.id} id={i.id} />))}
                    </List>
                </Drawer>
            </div>
        )
    }
}
function mapStateToProps(appState){
    console.log('appState', appState)
    return {
        open: appState.open
    }
}
export default connect(mapStateToProps)(SideNavBar)