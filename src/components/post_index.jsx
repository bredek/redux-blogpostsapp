import React, { Component } from 'react';

// functions
import { connect } from 'react-redux';
// actions
import { fetchPosts } from '../actions/index';


class PostIndex extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        return <div>PostIndex</div>
    }
}
// Action creator shrtcuts
export default connect(null, { fetchPosts })(PostIndex);