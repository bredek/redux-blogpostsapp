import _ from 'lodash';
import React, { Component } from 'react';

// functions
import { connect } from 'react-redux';
// actions
import { fetchPosts } from '../actions/index';


class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item">
                    {post.title}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

// whatever is returned will show up as props
// Object
function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

// Action creator shrtcuts
export default connect(mapStateToProps, { fetchPosts })(PostIndex);