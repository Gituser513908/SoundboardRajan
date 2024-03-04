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
    const audioList = [
        require('../assets/A2.mp3'),
        require('../assets/A3.mp3'),
        require('../assets/A4.mp3'),
        require('../assets/A5.mp3'),
       
    ]

    //load a sound into the PBO 
    const loadSound = async (soundNumber) => {

        let audio = audioList[soundNumber];
        try {

           
            const soundObj = new Audio.Sound()
           
           

            // const { sound } = await Audio.Sound.createAsync(audio);

            await soundObj.loadAsync(audio)
          
            setMyPBO(soundObj)

            setPlaybackStatus("Loaded");

            if (playBackStatus === "Loaded") {

                playPBO()
            }
            console.log('loades',soundNumber);
        } catch (error) {
            console.log(error);
        }
    }

    //play a pbo
    const playPBO = async () => {

      try {
          

               myPBO.playAsync();

              setPlaybackStatus("Playing")
         
       } catch (e) {
            console.log(e);
        }
    }

   


        //unload a pbo

        const unloadPBO = async () => {
            
                await myPBO.unloadAsync();

                setPlaybackStatus("Unloaded");
            
        }

        //load sound on startup and unload when we leave

    useEffect(() => {

            loadSound(); //no await is fine in useEffect for Hook reasons
            
           
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

                    onPress={ () => {
                     
                          loadSound(0);
                        // playPBO();
                        

                    }}
                    >
                    
                </Pressable>

                 <Pressable
                 
                    onPress={ () => {
                       
                        loadSound(1);
                         //playPBO();
                    }}
                    style={[Styles.soundbutton,Styles.sb2,]}>
                 </Pressable>

                <Pressable

                    onPress={() => {
                        loadSound(2);
                       // playPBO();
                    }}
                    style={[Styles.soundbutton,Styles.sb3,]}>
                   
                </Pressable>

      
                <Pressable

                    onPress={ () => {
                      loadSound(3);
                       // playPBO();
                    }}
                 
                    style={[Styles.soundbutton,Styles.sb4,]}>
                    
                        
                </Pressable>

      
        


      

                       
         </View>



           

            

        </View>
        
    );
}

    