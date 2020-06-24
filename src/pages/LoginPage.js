import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../containers/auth/LoginForm';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm />
        </AuthTemplate>
    )
}

export default LoginPage;