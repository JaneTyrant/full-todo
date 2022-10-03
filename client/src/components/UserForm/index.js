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
    <Formik initialValues={{login: '', password: '', avatar: ''}} onSubmit={onSubmit}>
        {
        formikProps => (<Form>
            <Field name='login' placeholder='login'/>
            <Field name='password' placeholder='password' type='password'/>
            <input name='avatar' type='file' onChange={event => {formikProps.setFieldValue('avatar', event.target.files[0])}} />
            <input type='submit' value='create user'/>
        </Form>)}
    </Formik>
    );
};

export default UserForm;
