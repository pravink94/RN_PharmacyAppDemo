import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';

import { refCodeChanged, ownerNameChanged, phoneNumberChanged, userNameChanged, passwordChanged, addLicenseImage, removeLicenseImage, registerUser } from '../actions';

import { ParentView, BlankView, ScreenTitle, Button, Input, Spinner, SmallImageView, HorizontalLine, ChildView, ItemImageView } from '../components';
import { BLACK, PRIMARY_COLOR, WHITE } from '../values/Color';


class RegistrationScreen extends Component {


    onRefCodeChange(text) {
        this.props.refCodeChanged(text);
    }
    onOwnerNameChange(text) {
        this.props.ownerNameChanged(text);
    }
    onPhoneNumberChange(text) {
        this.props.phoneNumberChanged(text);
    }
    onUserNameChange(text) {
        this.props.userNameChanged(text);
    }
    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    onAddLicenseImage(image) {
        this.props.addLicenseImage(image);
    }

    onImageRemoveFromList = (image) => {
        this.props.removeLicenseImage(image);
    }

    onLoginButtonPress() {
    }
    onRegisterButtonPress() {
        const { refCode, ownerName, phoneNumber, username, password, licenseImages } = this.props;
        this.props.registerUser({ refCode, ownerName, phoneNumber, username, password, licenseImages });
    }
 
    renderRegisterStatus() {
        if (this.props.loading) {
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
                        value={this.props.refCode} />
                    <Input
                        label="Owner Name"
                        placeholder="Enter Owner Name"
                        autoCorrect={false}
                        onChangeText={this.onOwnerNameChange.bind(this)}
                        value={this.props.ownerName} />
                    <Input
                        label="Phone Number"
                        placeholder="Enter Phone number"
                        autoCorrect={false}
                        onChangeText={this.onPhoneNumberChange.bind(this)}
                        value={this.props.phoneNumber} />
                    <Input
                        label="Email ID"
                        placeholder="Enter Email ID"
                        autoCorrect={false}
                        onChangeText={this.onUserNameChange.bind(this)}
                        value={this.props.username} />

                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        autoCorrect={false}
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    />

                    <Text style={styles.headline}>Upload Drug License</Text>
                    <BlankView />
                    <SmallImageView
                        tintColor={PRIMARY_COLOR}
                        source={require('../../assets/ic_image_upload.png')}
                        onPress={() => {
                            this.imageGalleryLaunch();
                        }} />
                    <Text style={styles.textStyle2}>Upload Image</Text>
                    <BlankView />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.props.licenseImages}
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
                    <BlankView />

                    {this.renderRegisterStatus()}

                    <HorizontalLine />
                    <Text style={styles.textStyle}>Already Registered</Text>
                    <Button
                        type="negative"
                        label="Login"
                        onPress={() => { }}
                    />
                </ChildView>
            </ParentView>
        );
    }
}


const styles = {
    textStyle: {
        backgroundColor: WHITE,
        marginTop: 10,
        textAlign: 'center',
    },
    textStyle2: {
        width: 70,
        color: BLACK,
        textAlign: 'center',
    },
    headline: {
        color: BLACK,
        fontSize: 17,
        fontWeight: "bold",
        backgroundColor: WHITE,
        textAlign: 'left',
    },
};

const mapStateToProps = state => {
    const { refCode, ownerName, phoneNumber, username, password, loading, error, licenseImages } = state.registrationAuth;
    return { refCode, ownerName, phoneNumber, username, password, loading, error, licenseImages };
}
export default connect(mapStateToProps,
    { refCodeChanged, ownerNameChanged, phoneNumberChanged, userNameChanged, passwordChanged, addLicenseImage, removeLicenseImage, registerUser }
)(RegistrationScreen);