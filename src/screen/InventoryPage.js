import React, { Component } from 'react'
import { Text, View, SafeAreaView} from 'react-native'
import { SearchBar } from 'react-native-screens'


export class InventoryPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View>
                <SearchBar />
                <View>
                  <ProductSlideShow />
                </View>
              </View>
      </SafeAreaView>

    )
  }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
}) 




export default InventoryPage
