import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {

    renderField(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input type="text"
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        )
    }

    render() {
        return (
            <form>
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
            </form>
        )
    }
}

function validate(values) {
    // values = { title: 'asdasd', catege....}
    const errors = {};

    if(!values.title){
        errors.title = "Enter title!";
    }    
    

    if(!values.categories){
        errors.categories = "Enter categories!";
    }    

    if(!values.content){
        errors.content = "Enter content!";
    }    

    // if errors is empty, the form is fine to submit
    return errors;
}

export default reduxForm({
  form: 'PostsNewForm' // a unique identifier for this form
})(PostsNew)

// export default PostsNew;