import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  loginUser } from '../actions';

import { CommonActions } from '@react-navigation/native';
import { ParentView, ImageView, RtlTextView, Headline, Button, Input, ChildView, BlankView, Spinner } from '../components';

class LoginScreen extends Component {
    state = {
        username: '',
        password: '',
        loading: false,
        error: ''
    };

    onUserNameChange(text) {
        this.setState({ username: text, loading: false, error: '' });
    }
    onPasswordChanged(text) {
        this.setState({ password: text, loading: false, error: '' });
    }
    onLoginButtonPress() {
        const { username, password } = this.state;
        this.setState({
            loading: true,
            error: ''
        });
        this.props.loginUser({ username, password });
    }
    onRegisterButtonPress() {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'RegistrationScreen' }
                ],
            })
        );
    }
    renderLoginStatus() {

        if (this.state.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button
                type="positive"
                label="Login"
                onPress={this.onLoginButtonPress.bind(this)}
            />
        );
    }

    render() {
        return (
            <ParentView>
                <Headline label="Welcome To Pharmacy App" />
                <ImageView
                    source={require('../../assets/forest.jpg')} />
                <BlankView />
                <ChildView>
                 <Input
                    label="User Name"
                    placeholder="Ex: Pravin"
                    autoCorrect={false}
                    onChangeText={this.onUserNameChange.bind(this)}
                        value={this.state.username}
                />
                    <BlankView />
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.state.password}
                />
                    <BlankView />
                    <RtlTextView label="Forgot Password" />
                    <BlankView />
                    {this.renderLoginStatus()}
                    <BlankView />
                    <Button
                        type="negative"
                        label="Register"
                        onPress={this.onRegisterButtonPress.bind(this)}
                    />
                </ChildView>
            </ParentView>
        );
    }
}

// const mapStateToProps = (state) => {
//     const { username, password, error, loading } = state.loginAuth;
//     return {
//         username, password, error, loading
//     };
// };

export default connect(null, {  loginUser })(LoginScreen);