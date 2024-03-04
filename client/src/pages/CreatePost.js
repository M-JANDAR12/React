import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import './CreatePost.css'; // Assuming you have a CSS file for styling

function CreatePost() {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),

    })
    const onSubmit = (data) => {
        axios.post("http://localhost:8484/posts", data).then((response) => {
            console.log("!IT WORKED")
          })
    }
  return (
    <div className="createPostPage">
      <h1>Create a New Post</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='formContainer'>
          <div className="form-group">
            <label htmlFor="inputTitle">Title:</label>
            <ErrorMessage name='title' component="span"></ErrorMessage>
            <Field 
              type="text"
              id="inputTitle"
              name="title"
              placeholder="Post Title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPostText">Post Text:</label>
            <ErrorMessage name='username' component="span"></ErrorMessage>
            <Field
              type="text"
              id="inputPostText"
              name="postText"
              placeholder="Post Text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputUsername">Username:</label>
            <ErrorMessage name='username' component="span"></ErrorMessage>
            <Field
              type="text"
              id="inputUsername"
              name="username"
              placeholder="Username"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;