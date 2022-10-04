import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionUserCreators from '../../actions/userCreators';

const UserForm = () => {
    const { createUserRequest } = bindActionCreators(ActionUserCreators, useDispatch());
    const onSubmit = (values, formilBag) => {
        createUserRequest(values);
        formilBag.resetForm();
    };
    return (
    <Formik initialValues={{login: '', password: '', image: ''}} onSubmit={onSubmit}>
        {
        formikProps => (<Form action="/profile" method="post"   enctype="multipart/form-data">
            <Field name='login' placeholder='login'/>
            <Field name='password' placeholder='password' type='password'/>
            <input name='image' type='file' onChange={event => {formikProps.setFieldValue('image', event.target.files[0])}} />
            <input type='submit' value='create user'/>
        </Form>)}
    </Formik>
    );
};

export default UserForm;
