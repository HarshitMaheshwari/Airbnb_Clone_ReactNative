import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = (props) => {
    return(
        <View>
            <Pressable style={styles.searchButton} onPress={() => console.warn('Search Button Clicked')}>
                <Fontisto name="search" size={25} color={"#f15454"}/>
                <Text style={styles.buttonText}>Where are you going?</Text>
            </Pressable> 

            <ImageBackground 
                source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
                <Text style = {styles.title}>Go near</Text>
                <Pressable style={styles.button} onPress={() => console.warn('Explore Button Clicked')}>
                    <Text style={styles.buttonText}>Explore NearBy Stays!</Text>
                </Pressable>
            </ImageBackground>

        </View>
    );
};

export default HomeScreen;