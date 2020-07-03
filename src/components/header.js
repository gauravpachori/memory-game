import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const header = ({ level, score, timer }) => (
    <>
        <Text style = { styles.head }>Memory Game</Text>
        <View style = { styles.levelScore }>
            <Texts head = 'Level' value = { level } />
            <Texts head = 'Score' value = { score } />
        </View>
        <Texts head = 'Time left' value = { timer } />
    </>
)

const Texts = ({ head, value }) => (
    <View>
        <Text style = { styles.textHead }>{ head }</Text>
        <Text style = { styles.textLabel }>{ value }</Text>
    </View>
)

const styles = StyleSheet.create({
    head: {
        paddingVertical: 25,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: 'blue'
    },
    levelScore: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textHead: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    textLabel: {
        fontSize: 14,
        color: 'red',
        textAlign: 'center'
    }
})

const mapStateToProps = (store) => ({
    level: store.data.level,
    score: store.data.score,
    timer: store.data.timer,
})

export default connect(mapStateToProps)(header);