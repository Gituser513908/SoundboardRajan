/**
 * Assignment 3: Sound Board
 * 
 * Author: Rajan Chaudhari 
 * 
 * date: 2024-03-01
 */

/**
 * Inspired by
 * 
 * Stephen Graham's in class examples,
 * 
 * Record and play audio in expo react native by Code Entropy on youtube 
 * 
 * Learn to Add sound in React native app by The Web Dev on youtube
 * 
 * 
 */


//index.js

import React, { useState} from 'react';
import { Alert,Pressable, Text, TextInput,  View } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';


export default function Page() {


    

return (
    <View style={Styles.page} >

        

        <Text style={Styles.header}> Assignment 3</Text>


        <Text style={Styles.textW}> Welcome to Wach a Molee</Text>

        <Text style={Styles.text1}> How to play</Text>

        <Text style={Styles.text2}> Click Start Game to play game</Text>

        <Text style={Styles.text2}> You get 60 sec to play, 3 lives,</Text>

        <Text style={Styles.text2}> Try to get a higer score</Text>

        <Text style={Styles.text2}> You miss a mole you lose a life</Text>

        <Text style={Styles.text2}> Game Ends when you lose all lives or </Text>

        <Text style={Styles.text2}>  timer runs out</Text>

        <Text style={Styles.text2}>Don't worry you can restart !!</Text>

        <Text style={Styles.text2}>ENJOY</Text>

        


        <View>
        
        

       
            <Link
                style={Styles.button}
                href={{
                    pathname: "/page",
                    
                }} asChild >

                <Pressable>
                    
                    <Text style={{ fontSize: 20 } }>Start Game</Text> 
                </Pressable>

            </Link>

           

        </View>



    </View>
    
    )

}
//this git having problem