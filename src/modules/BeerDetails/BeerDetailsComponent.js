import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default class BeerDetailsComponent extends Component {

    static navigationOptions = {
        title: 'Beer Details'
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params
        this.props.getBeerDetails(id)
    }

    render() {
        const { beerDetails, loadingInfo } = this.props
        
        if (loadingInfo)
            return <Text>Loading...</Text>
        
        const {
            name,
            tagline,
            description,
            first_brewed,
            image_url
        } = beerDetails

        return (
            <View style={styles.detailContainer}>

                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>{name}</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image source={{ uri: image_url }} style={styles.image} />
                </View>

                <View style={styles.tagLineContainer}>
                    <Text style={styles.tagLineText}>{tagline}</Text>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>

                <View style={styles.brewedContainer}>
                    <Text>First Brewed: {first_brewed}</Text>
                </View>
                
            </View>
        )
    }
}