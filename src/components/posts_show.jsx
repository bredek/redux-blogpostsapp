import React, { Component } from 'react';
import { connect } from 'react-redux';
// actions
import { fetchPost } from '../actions/index';

class PostsShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        // this.props.match.params.id;
        this.props.fetchPost(id);
    }



    render() {
        const { post } = this.props;

        if (!post) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        )
    }
}

// whatever is returned will show up as props
// Object
function mapStateToProps({ posts }, ownProps) {
    return {
        post: posts[ownProps.match.params.id]
    };
}

// Action creator shrtcuts
export default connect(mapStateToProps, { fetchPost })(PostsShow);
// export default PostsNew;