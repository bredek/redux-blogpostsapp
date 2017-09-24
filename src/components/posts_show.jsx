import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// actions
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        // this.props.match.params.id;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        // this.props.match.params.id;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
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
                <Link className="btn" to="/">Back to index</Link>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <button onClick={this.onDeleteClick.bind(this)}>Delete post</button>
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
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
// export default PostsNew;