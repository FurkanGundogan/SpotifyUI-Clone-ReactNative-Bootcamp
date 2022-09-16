import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';


const ThemeArea = () => {
  const {theme, darkTheme, lightTheme, setTheme} = ["","","",""]
  const myAlert = () => {
    alert("Themes are future work.")
  }
  return (
    <View style={{...styles.container,backgroundColor:theme?.backgroundColor}}>
      <Text style={styles.title}>
        PICK <Text style={theme?.themeText}>THEME</Text>
      </Text>
      <View style={styles.themeAreaWrapper}>
        <View style={styles.themeWrapper}>
          <View style={styles.theme}>
            <TouchableOpacity onPress={myAlert}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://www.wallpaperflare.com/static/43/992/1016/sky-sun-sunlight-clouds-wallpaper.jpg',
                  }}
                />
              </View>
            </TouchableOpacity>
            <Text style={{...styles.themeText, ...styles.themeDay}}>Day</Text>
          </View>
        </View>
        <View style={styles.themeWrapper}>
          <View style={styles.theme}>
            <TouchableOpacity onPress={myAlert}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://i.pinimg.com/originals/49/66/55/4966550fa2ff97f4f432700b20088f83.png',
                  }}
                />
              </View>
            </TouchableOpacity>
            <Text style={{...styles.themeText, ...theme?.themetextDark}}>Dark</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ThemeArea;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 128,
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    color: '#00adf7',
    textAlign: 'center',
    textShadowRadius: 4,
    textShadowColor: 'white',
    marginBottom: 32,
  },
  themeAreaWrapper: {
    flexDirection: 'row',
  },
  themeWrapper: {
    flex: 1,
    padding: 32,
    height: 200,
  },
  theme: {
    flex: 1,
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 20,
    borderColor: '#bcc9cf',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  themeText: {
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    letterSpacing: 0.4,
  },
  themeDay: {
    color: '#65c6f0',
    fontWeight: '900',
    textShadowRadius: 2,
    textShadowColor: '#c1c3de',
  },
 
 
});