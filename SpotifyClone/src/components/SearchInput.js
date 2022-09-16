import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchInput = ({input,setinput}) => {
  return (
    <View style={styles.searchInputWrapper}>
      <TextInput
        style={styles.textInput}
        placeholder="Search song..."
        value={input}
        onChangeText={(e) => setinput(e)}
      />
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    searchInputWrapper:{
        marginTop:24
    },
    textInput: {
        backgroundColor: "white",
        color: "gray",
        fontSize: 12,
        borderRadius: 8,
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 16,
        height: 40,
        padding: 8,
        borderColor: "#18782e",
        borderWidth: 1,
    
        fontWeight: "400",
      },
})