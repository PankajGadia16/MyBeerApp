import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class BeersListComponent extends Component {

    static navigationOptions = {
        title: 'Beers'
    }

    componentDidMount() {
        this.props.listBeers()
    }

    renderItem = ({ item }) => (

        <TouchableOpacity
            style={styles.item}
            onPress={() => this.props.navigation.navigate("Detail", { id: item.id })}
        >
            <Text style={styles.listItemText}>{item.name}</Text>
        </TouchableOpacity>
    )

    render() {

        const {
            beers,
            page,
            perPage,
            listMoreBeers,
            loading
        } = this.props

        return (
            <ScrollView>

                <FlatList
                    styles={styles.container}
                    data={beers}
                    renderItem={this.renderItem}
                />

                <View>
                    <TouchableOpacity
                        onPress={() => { listMoreBeers(page + 1, perPage) }}
                        style={styles.loadingButton}
                        disabled={loading}
                    >

                        <Text style={styles.loadingText}>
                            {loading ? 'Loading...' : 'Load More Beers'}
                        </Text>

                    </TouchableOpacity>

                </View>

            </ScrollView>
        )
    }
}
