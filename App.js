import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import axios from 'axios'

import BeersList from './src/modules/BeersList'
import BeerDetails from './src/modules/BeerDetails'
import createStore from './src/store'

const client = axios.create({
  baseURL: 'https://api.punkapi.com/v2/beers',
  responseType: 'json'
})

const Stack = StackNavigator({
  Home: {
    screen: BeersList
  },
  Detail: {
    screen: BeerDetails
  }
})

export default class App extends Component {

  constructor(props) {
    super(props)
    this.store = createStore(client)
  }

  render() {
    return (
      <Provider store={this.store}>

        <View style={styles.container}>
          <Stack />
        </View>

      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})