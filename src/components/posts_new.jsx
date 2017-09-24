import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions/index';

class PostsNew extends Component {

    renderField(field) {
        const { meta: {touched, error} } = field;
        const className = `form-group ${touched && error? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input type="text"
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                  {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });

        console.log(values);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div>
                    <label>Title</label>
                    <div>
                        <Field
                            name="title"
                            component={this.renderField}
                            type="text"
                            placeholder="Title"
                        />
                    </div>
                </div>
                <div>
                    <label>Categories</label>
                    <div>
                        <Field
                            name="categories"
                            component={this.renderField}
                            type="text"
                            placeholder="Categories"
                        />
                    </div>
                </div>
                <div>
                    <label>Post Content</label>
                    <div>
                        <Field
                            name="content"
                            component={this.renderField}
                            type="text"
                            placeholder="Content goes here"
                        />
                    </div>
                </div>
                <button type="submit" className="btn">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    // values = { title: 'asdasd', catege....}
    const errors = {};

    if (!values.title) {
        errors.title = "Enter title!";
    }


    if (!values.categories) {
        errors.categories = "Enter categories!";
    }

    if (!values.content) {
        errors.content = "Enter content!";
    }

    // if errors is empty, the form is fine to submit
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm' // a unique identifier for this form
})(
    connect(null, { createPost })(PostsNew)
)

// export default PostsNew;