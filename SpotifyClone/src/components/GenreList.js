import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { useSelector } from "react-redux";
  import { tagImageList } from "../utils/lastfmAPI";
  import { useNavigation } from "@react-navigation/native";
  const GenreList = () => {
    const navigation = useNavigation()
    const searchTags = useSelector((state) => state?.searchTags);
    const goTagMusics = (name) => {
      navigation.navigate('SearchGenreList',{tagName:name})
    };
    const TabItem = ({ item }) => {
      const url=tagImageList?.filter(tag=>tag?.name===item?.name)?.[0]?.url
      return(
      <TouchableOpacity
        style={styles.tabItemWrapper}
        onPress={() => goTagMusics(item?.name)}
      >
         <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: url
            }}
          />
        </View>
        <Text style={styles.tabItemText}>{item?.name?.toUpperCase()}</Text>
      </TouchableOpacity>
    )
          }
    return (
      <FlatList
        style={styles.tabsContainer}
        showsHorizontalScrollIndicator={false}
        data={searchTags}
        renderItem={TabItem}
        numColumns={2}
      />
    );
  };
  
  export default GenreList;
  
  const styles = StyleSheet.create({
    tabsContainer: {
      padding: 8,
      width:900,
      backgroundColor:"black",

    },
    tabItemWrapper: {
      height:100,
      backgroundColor: "#2a2b2a",
      margin: 4,
      width:180,
      borderRadius: 8,
      flexDirection:"row",
      alignItems:"center"
    },
    tabItemText: {
      color: "white",
      textAlign: "center",
      fontWeight: "800",
      marginLeft:8,
      fontSize:11,
      maxWidth:85,
     alignContent:"center"
    },
    imageContainer: {
      width: 80,
      height: 100,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: 'gray',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });
  