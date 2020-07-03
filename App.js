import React from 'react';
import { ScrollView, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { Provider } from "react-redux";
import store from "./src/redux";

import Header from './src/components/header';
import Game from './src/components/game';

export default App = () => (
    <Provider store = { store }>
        <SafeAreaView style = { styles.home }>
            <StatusBar barStyle = 'dark-content' />
            <ScrollView style = { styles.home }>
                <Header />
                <Game />
            </ScrollView>
        </SafeAreaView>
    </Provider>
)

const styles = StyleSheet.create({
    home: {
        backgroundColor: '#eee',
        flex: 1
    }
})