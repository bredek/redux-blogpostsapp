import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">Add a post</Link>
                </div>

                <ul>
                    <h3>Posts</h3>
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