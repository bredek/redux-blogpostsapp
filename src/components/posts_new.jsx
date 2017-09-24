import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {

    render() {
        return (
            <form>
                 <div>
                    <label>First Name</label>
                    <div>
                    <Field
                        name="title"
                        component="input"
                        type="text"
                        placeholder="Title"
                    />
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({
  form: 'PostsNewForm' // a unique identifier for this form
})(PostsNew)

// export default PostsNew;