// page2.js



import { useState, useEffect, useCallback } from 'react';
import { Alert,Button, Text, Pressable, View } from 'react-native';
import { Link, useNavigation, useLocalSearchParams, } from 'expo-router';
import { Audio } from 'expo-av';
import Styles from '../styles/page-styles';


// "/" means index.js




export default function Page() {

    const [myPBO, setMyPBO] = useState(null);

    const [playBackStatus, setPlaybackStatus] = useState("Unloaded");

    const navigation = useNavigation(); // to navigate to page2

    // array of sounds for pre loading buttons
    const soundList = [
        require('../assets/A1.mp3'),
        require('../assets/A2.mp3'),
        require('../assets/A3.mp3'),
        require('../assets/A4.mp3'),
        require('../assets/A5.mp3'),
        require('../assets/A5.mp3'),
    ]

    //load a sound into the PBO 
    const loadSound = async (soundNumber) => {

     
        try {
           
           // const soundObj = new Audio.Sound()
            
           

            const { sound } = await Audio.Sound.createAsync(soundList[soundNumber]);
          
            setMyPBO(sound)

            setPlaybackStatus("Loaded");
           
            console.log('loades',soundNumber);
        } catch (error) {
            console.log(error);
        }
    }

    //play a pbo
  const playPBO = async () => {
      try {
          if (myPBO && playBackStatus === "Loaded") {
              await myPBO.playAsync();

              setPlaybackStatus("Playing")
          }
       } catch (e) {
            console.log(e);
        }
    }

    //stop a pbo
    const stopPBO = async () => {
        setPlaybackStatus("Stopped");
        await myPBO.stopAsync();// but then we should "rewind" it
    }


        //unload a pbo

        const unloadPBO = async () => {
            
                await myPBO.unloadAsync();

                setPlaybackStatus("Unloaded");
            
        }

        //load sound on startup and unload when we leave

        useEffect(() => {
            loadSound(); //no await is fine in useEffect for Hook reasons
            return () => unloadPBO();
           
        }, [myPBO])

    return (

        

        <View style={Styles.page}>

           

            <View style={Styles.backButton}>
              <Button
                color="lightblue" 
                title="<-"
                onPress={() => {

                    navigation.goBack();

                }}
             /> 

            </View>

           

             
         
            

            <View style={{ top: -300, }}>

                
                <Pressable
                    style={[Styles.soundbutton, Styles.sb1,]}

                    onPress={async() => {
                     
                        await loadSound(0);
                       await  playPBO();
                        

                    }}
                    >
                    
                </Pressable>

                 <Pressable
                 
                    onPress={async () => {
                       
                       await loadSound(1);
                        await playPBO();
                    }}
                    style={[Styles.soundbutton,Styles.sb2,]}>
                 </Pressable>

                <Pressable

                    onPress={async () => {
                       await loadSound(2);
                       await playPBO();
                    }}
                    style={[Styles.soundbutton,Styles.sb3,]}>
                   
                </Pressable>

      
                <Pressable

                    onPress={async () => {
                       await loadSound(3);
                        await playPBO();
                    }}
                 
                    style={[Styles.soundbutton,Styles.sb4,]}>
                    
                        
                </Pressable>

      
        <Pressable

                    onPress={async () => {
                        await loadSound(4);
                       await playPBO();
                    }}
                    style={[Styles.soundbutton,Styles.sb5,]}>
                   
                    
                       
                  
                  

        </Pressable>


        <Pressable
                    onPress={async () => {
                       await loadSound(5);
                       await playPBO();
                    }}
                    style={[Styles.soundbutton,Styles.sb6,]}>
           </Pressable>

                       
         </View>



           

            

        </View>
        
    );
}

    