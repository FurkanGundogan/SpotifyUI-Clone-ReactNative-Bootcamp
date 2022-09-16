import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import axios from 'axios'
import { imageUrl, LastFmAPIKey, LastFmUrl } from '../utils/lastfmAPI'
import { useState } from 'react'
import { useEffect } from 'react'
import MusicListItem from './MusicListItem'

const HomeItemDetail = () => {
  const route = useRoute()
  const title=route?.params?.tagName

  const [musics, setmusics] = useState([])
  const getMusics = async () => {
    const res = await axios.get(LastFmUrl, {
      params: {
        method: "tag.gettoptracks",
        api_key: LastFmAPIKey,
        tag:title,
        format: "json",
      },
    }).then((response)=>{
      setmusics(response?.data?.tracks?.track?.slice(0,20))
    });
  };
  useEffect(() => {
    if(title !== undefined && title !==null){
      getMusics()
    }
  }, [])
  return (
    <>
    <View style={styles.titleWrapper}>
    <Text style={styles.title} >Top 20 {title.toUpperCase()} Songs</Text>
    </View>
    <FlatList
      style={styles.tabsContainer}
      showsHorizontalScrollIndicator={false}
      data={musics}
      renderItem={({ item, index }) => (
        <MusicListItem item={item} url={imageUrl} index={index} />
      )}
    />
    </>
  )
}

export default HomeItemDetail

const styles = StyleSheet.create({
  titleWrapper:{
    paddingTop:24,
    paddingBottom:24,
    padding:8,
    backgroundColor:"black"
  },
  title:{
    color:"green",
    textAlign:"center",
    fontWeight:"800",
    fontSize:16,
  },
  tabsContainer:{
    paddingTop:4,
    backgroundColor:"black"
  }
})