import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {

        fontSize: 25,
        marginBottom: 60,
        marginTop: -100,
    },



   

    button: {
        margin: 10,
        width: 100,
        height: 70,
        backgroundColor: 'lightblue',
        
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'solid',
        borderWidth: 2,

    },
    button2: {
        backgroundColor: 'lightblue',
        borderRadius: 30,
        padding: 20,
        marginBottom: -30,
        marginTop: 40,

        width: 150,
        height: 70,
        alignItems: 'center',

    },
    text: {

        fontSize: 20,
        padding: 15,
        paddingLeft: 80,
        paddingTop: 20,


    },
   
       
    textW: {
        fontSize: 30,
        paddingBottom: 30 
    },
    text1: {
        fontSize: 25,
        paddingBottom: 15
    },
    text2: {
        fontSize: 20,
        paddingBottom: 15
    },
    

    soundbutton: {
        height: 100,
        width: 100,
        borderRadius: 0,
        borderWidth: 2,
        borderColor: 'solid',
        
        
    },

    sb1: {
       
        top: 300,
       left:-110,
        width: 100,
        height: 100,
       
        
    },
    sb2: {
        
        top: 200,
       
        width: 100,
        height: 100,
       
    },
    sb3: {

        
        top: 100,
       left:110,
        width: 100,
        height: 100,
       
    },

    headText: {
        fontSize: 20,
        marginBottom: 10,
    },

    startStop: {
        marginBottom: 20,
        height: 100,

    },
   
    play: {
        marginBottom: 10,
    },
   

    backButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: 10,
        width: 100,
        height: 60,
    },

    countView: {
        position: 'absolute',
        top: 85,
        right: 110,
        flexDirection: 'row',
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 25,
        marginTop: -2,
        paddingBottom: 15,
    },
    timeText: {
        marginTop: 60,
        fontSize: 25,
    },
    livesText: {
        marginRight: -35,
        fontSize: 25,
        marginTop: -2,
        paddingBottom: 15,
    },

});


export default styles; 