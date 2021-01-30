import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';

const HomeScreen = (props) => {
    return(
        <View> 

            <ImageBackground 
                source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
                <Text style = {styles.title}>Go near</Text>
                <Pressable style={styles.button} onPress={() => console.warn('Explore Button Clicked')}>
                    <Text>Explore NearBy Stays!</Text>
                </Pressable>
            </ImageBackground>

        </View>
    );
};

export default HomeScreen;