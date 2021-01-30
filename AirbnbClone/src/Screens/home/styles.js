import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create ({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center'
    },

    title: {
        fontSize: 85,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },

    button: {
        backgroundColor: 'white',
        width: 200,
        marginLeft: 25,
        marginTop: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    searchButton: {
        backgroundColor: 'white',
        position: 'absolute',
        width: Dimensions.get('screen').width - 20,
        top: 20,
        marginHorizontal: 10,
        flexDirection: 'row',
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 50,
    },

    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    }

});

export default styles; 