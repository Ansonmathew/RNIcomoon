/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';

const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const App = () => {
    return (
        <View style= {[styles.container, styles.center]}>
            <Icon  name= 'happy'
                style= {[styles.colorBlue, styles.fontSize30]} />
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorBlue: {
        color: '#002080'
    },
    fontSize30: {
        fontSize: 30
    }
});
