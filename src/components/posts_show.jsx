import React, { Component } from 'react';
import { connect } from 'react-redux';
// actions
import { fetchPost } from '../actions/index';

class PostsShow extends Component {

    componentDidMount() {
        const {id }= this.props.match.params;
        // this.props.match.params.id;
        this.props.fetchPost(id);
    }



    render(){
        return(
            <div>Nothing</div>
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
export default connect(null, { fetchPost })(PostsShow);
// export default PostsNew;