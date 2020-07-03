import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { updateBlocks, updateTimer } from '../redux/action'

class game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            block: props.blocks.data,
            lastIndex: false,
            total: 0
        }
    }

    handleMemory = (val) => {
        if (this.props.timer === '00:00') {
            this.props.updateTimer()
        }
        let { block, lastIndex, total } = this.state;
        if (block[val].blocked) {
            return;
        }
        if (lastIndex === false) {
            block[val].active = !block[val].active;
            lastIndex = val;
        } else {
            if (block[val].value === block[lastIndex].value) {
                total += 2;
                block[val].blocked = true;
                block[lastIndex].blocked = true;
            } else {
                block[lastIndex].active = false;
            }
            lastIndex = false;
        }
        this.setState({ block, lastIndex, total });
        if (total === block.length) {
            alert('Level up!');
            this.props.updateBlocks();
            setTimeout(() => {
                this.setState({ block: this.props.blocks.data, total: 0 })
            }, 100);
        }
    }

    render() {
        const { block } = this.state;
        const width = Dimensions.get('window').width / this.props.blocks.grid;
        return (
            <View style = { styles.wrapper }>
                {
                    block.map((el, index) => (
                        <View style = {{ width }} key = { el.id }>
                            <TouchableOpacity
                                style = {[ styles.block, (el.active || el.blocked) && styles.active]}
                                onPress = { () => this.handleMemory(index) }
                            >
                                <Text style = { styles.blockText }>{ el.value }</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingVertical: 25
    },
    block: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 100,
        margin: 5,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 10,
    },
    active: {
        backgroundColor: '#fff'
    },
    blockText: {
        color: 'green'
    }
})

const mapStateToProps = (store) => ({
    level: store.data.level,
    blocks: store.data.blocks,
    timer: store.data.timer
})

const mapDispatchToProps = {
    updateBlocks,
    updateTimer
}

export default connect(mapStateToProps, mapDispatchToProps)(game);