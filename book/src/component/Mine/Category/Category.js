import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import BaseContainer from '~/common/Base/BaseContainer'
import CHeader from './CHeader'
import CTable from './CTable'
import CButton from './CButton'


export default class Category extends Component {

    _onButtonPress = ()=>{
        this.props.navigation.navigate('ACate')
    }

    render() {
        return (
            <BaseContainer 
                navigation={this.props.navigation} 
                title={'类别设置'}
            >
                <CHeader/>
                <CTable/>
                <CButton onPress={this._onButtonPress}/>
            </BaseContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});