import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { COLORS } from '../assets';

import { registerUser } from '../actions';

import { ParentView, BlankView, ScreenTitle, Button, Input, Spinner, SmallImageView, HorizontalLine, ChildView, ItemImageView } from '../components';


class RegistrationScreen extends Component {
    state = { refCode: '',
    ownerName: '',
    phoneNumber: '',
    username: '',
    password: '',
    user: null,
    loading: false,
    error: '',
    licenseImages: [] };

    onRefCodeChange(text) {
        this.setState({ refCode: text, loading: false, error: ''});
        }
    onOwnerNameChange(text) {
        this.setState({ ownerName: text, loading: false, error: ''});
    }
    onPhoneNumberChange(text) {
        this.setState({ phoneNumber: text, loading: false, error: ''});
    }
    onUserNameChange(text) {
        this.setState({ username: text, loading: false, error: ''});
    }
    onPasswordChanged(text) {
        this.setState({ password: text, loading: false, error: ''});
    }
    onAddLicenseImage(image) {
        const newArray = this.state.licenseImages;
        newArray.push(image);
        this.setState({ licenseImages: newArray, loading: false, error: '' });
    }

    onImageRemoveFromList = (image) => {
        var imageArray = this.state.licenseImages;
        var index = imageArray.indexOf(image)
            if (index !== -1) {
                imageArray.splice(index, 1);
            }
        console.log(imageArray.length);
        this.setState({ licenseImages: imageArray, loading: false, error: '' });
    }

    onLoginButtonPress() {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'LoginScreen' }
                ],
            })
        );
    }

    onRegisterButtonPress() {
        const { refCode, ownerName, phoneNumber, username, password, licenseImages } = this.state;
        this.setState({
            loading: true,
            error: ''
         });
        this.props.registerUser({ refCode, ownerName, phoneNumber, username, password, licenseImages });
    }
 
    renderRegisterStatus() {
        if (this.state.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button
                type="positive"
                label="Register"
                onPress={this.onRegisterButtonPress.bind(this)}
            />
        );
    }


    imageGalleryLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (res) => {
            // console.log('Response = ', res);
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else {
                const assetsArray = res.assets;
                for (let index = 0; index < assetsArray.length; index++) {
                    const element = assetsArray[index];
                    let now = Date.now();
                    this.onAddLicenseImage({
                        id: now,
                        fileType: element.type,
                        fileUri: element.uri,
                        fileName: element.fileName
                    });

                }
            }
        });
    }


    render() {
        return (
            <ParentView>
                <ScreenTitle label="Register" />
                <ChildView>
                    <BlankView />
                    <Input
                        label="Referral Or Promo code"
                        placeholder="Enter Referral or Promo code"
                        autoCorrect={false}
                        onChangeText={this.onRefCodeChange.bind(this)}
                        value={this.state.refCode} />
                    <BlankView />
                    <Input
                        label="Owner Name"
                        placeholder="Enter Owner Name"
                        autoCorrect={false}
                        onChangeText={this.onOwnerNameChange.bind(this)}
                        value={this.state.ownerName} />
                    <BlankView />
                    <Input
                        label="Phone Number"
                        placeholder="Enter Phone number"
                        autoCorrect={false}
                        onChangeText={this.onPhoneNumberChange.bind(this)}
                        value={this.state.phoneNumber} />
                    <BlankView />
                    <Input
                        label="Email ID"
                        placeholder="Enter Email ID"
                        autoCorrect={false}
                        onChangeText={this.onUserNameChange.bind(this)}
                        value={this.state.username} />
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

                    <Text style={styles.headline}>Upload Drug License</Text>
                    <BlankView />
                    <SmallImageView
                        tintColor={COLORS.primary_color}
                        source={require('../../assets/ic_image_upload.png')}
                        onPress={() => {
                            this.imageGalleryLaunch();
                        }} />
                    <Text style={styles.textStyle2}>Upload Image</Text>
                    <BlankView />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.licenseImages}
                        keyExtractor={(image) => image.id}
                        renderItem={({ item }) => {
                            return (
                                <ItemImageView
                                    showRemoveIcon={true}
                                    source={{ uri: item.fileUri }}
                                    onDeleteIconPress={() => {
                                        this.onImageRemoveFromList(item);
                                    }} />
                            )
                        }}
                    />
                    <BlankView />

                    {this.renderRegisterStatus()}

                    <BlankView />
                    <HorizontalLine />
                    <Text style={styles.textStyle}>Already Registered</Text>
                    <Button
                        type="negative"
                        label="Login"
                        onPress={() => { this.onLoginButtonPress()}}
                    />
                </ChildView>
            </ParentView>
        );
    }
}


const styles = {
    textStyle: {
        backgroundColor: COLORS.white,
        marginTop: 10,
        textAlign: 'center',
    },
    textStyle2: {
        width: 70,
        color: COLORS.black,
        textAlign: 'center',
    },
    headline: {
        color: COLORS.black,
        fontSize: 17,
        fontWeight: "bold",
        backgroundColor: COLORS.white,
        textAlign: 'left',
    },
};

// const mapStateToProps = state => {
//     const { refCode, ownerName, phoneNumber, username, password, loading, error, licenseImages } = state.registrationAuth;
//     return { refCode, ownerName, phoneNumber, username, password, loading, error, licenseImages };
// }
export default connect(null,
    {  registerUser }
)(RegistrationScreen);