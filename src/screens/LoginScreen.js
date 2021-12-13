import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userNameChanged, passwordChanged, loginUser } from '../actions';

import { ParentView, ImageView, RtlTextView, Headline, Button, Input, Spinner } from '../components';

class LoginScreen extends Component {

    onUserNameChange(text) {
        this.props.userNameChanged(text);
    }
    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }
    onLoginButtonPress() {
        const { username, password } = this.props;
        this.props.loginUser({ username, password });
    }
    onRegisterButtonPress() {

    }
    renderLoginStatus() {

        if (this.props.loading) {
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
                <Input
                    label="User Name"
                    placeholder="Ex: Pravin"
                    autoCorrect={false}
                    onChangeText={this.onUserNameChange.bind(this)}
                    value={this.props.username}
                />
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText={this.onPasswordChanged.bind(this)}
                    value={this.props.password}
                />
                <RtlTextView label="Forgot Password" />
                {this.renderLoginStatus()}
                <Button
                    type="negative"
                    label="Register"
                    onPress={this.onRegisterButtonPress.bind(this)}
                />
            </ParentView>
        );
    }
}

const mapStateToProps = state => {
    const { username, password, error, loading } = state.loginAuth;
    return {
        username, password, error, loading
    };
};

export default connect(mapStateToProps, { userNameChanged, passwordChanged, loginUser })(LoginScreen);