/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    View,
    UIManager,
    LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'


class ListItem extends Component {
    componentDidUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
        
        LayoutAnimation.spring()
    }

    renderDesc() {
        const { library, expanded } = this.props 

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.item.description}
                    </Text>
                </CardSection>
            )
        }
    }
    render(){
        const { id, title } = this.props.library.item
        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDesc()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15,
    }
})

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id

    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)