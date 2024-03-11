// page2.js



import { useState, useEffect, useCallback } from 'react';
import { Alert,Button, Text, Pressable, View } from 'react-native';
import { Link, useNavigation, useLocalSearchParams, } from 'expo-router';
import { Audio } from 'expo-av';
import Styles from '../styles/page-styles';


// "/" means index.js




export default function Page() {

    const [myPBO, setMyPBO] = useState(null);//hold my playnack object
    const [playBackStatus, setPlaybackStatus] = useState("Unloaded");//status
    const [audioChange, setAudioChange] = useState(null);//to keep track of audio
    const [recordings, setRecordings] = useState([]); // the sound recordings array
    const [recordingsUri, setRecordingsUri] = useState([]);// the recorded file location
    const [playback, setPlayback] = useState(null); // the playback object
    const [permissionResponse, requestPermission] = Audio.usePermissions();// get microphone permission from useer


    const navigation = useNavigation(); // to navigate to page2

    // array of sounds for pre loading buttons
    const audioList = [
        require('../assets/A2.mp3'),
        require('../assets/A3.mp3'),
        require('../assets/A4.mp3'),
       
       
    ]

    //load a sound into the PBO 
    const loadSound = async (soundNumber) => {

        setAudioChange(soundNumber);

        let audio = audioList[soundNumber];
        try {

           
            const soundObj = new Audio.Sound()
           
           
            

            // const { sound } = await Audio.Sound.createAsync(audio);

            await soundObj.loadAsync(audio)
          
            setMyPBO(soundObj)

            setPlaybackStatus("Loaded");

            playPBO();
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
            if (myPBO)
                await myPBO.unloadAsync();

                setPlaybackStatus("Unloaded");
            
    }

    //start recording
    const startRecording = async () => {

        try {
            // make sure we have permission
            if (permissionResponse.status !== 'granted') {
                console.log("Requesting permissions");
                await requestPermission();
            }
            console.log('Permission is', permissionResponse.status);

            //set device specific values
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentMode: true,
            })



            const { recording } = await Audio.Recording.createAsync(
                Audio.RecordingOptionsPresets.HIGH_QUALITY
            );

            setRecordings(lastrec => [...lastrec, recording]);

           // setRecording(recording);
            console.log("recording!");

        } catch (error) {
            console.log("Error during startRecording(): ", error);
        }


    }

    //stop recording
    const stopRecording = async (index) => {
        try {

            const recording = recordings[index];// to stop recording at that index
            await recording.stopAndUnloadAsync(); //actually stop
            
            const uri = recording.getURI();
            setRecordingsUri(lasturi=>[...lasturi, uri]);// append to array of uri

            setRecordings([]);

            console.log("Recording stopped and stored at :", uri);
        } catch (error) {
            console.log("Eror during startRecording():", error);
        }
    }

    //play recording
    const playRecording = async (index) => {
        const { sound } = await Audio.Sound.createAsync({
            uri: recordingsUri[index]
        });
        setPlayback(sound);
        await sound.replayAsync();
        console.log('Playing recorded sound from', recordingsUri[index]);

    }

    //clear recording
    const clearRecording = async () => {
        setRecordingsUri([]);
    }

        

   

    // This effect hook will make sure the app stops recording when it ends
    useEffect(() => {
        return () => {
            recordings.forEach(async recording => {
                await recording.stopAndUnloadAsync();
            });
        };
    }, []);

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
                    style={[Styles.soundbutton, Styles.sb1, { backgroundColor: 'lightblue' } ]}

                    onPress={ () => {
                     
                          loadSound(0);
                         //playPBO();
                        

                    }}
                    >
                    
                </Pressable>

                 <Pressable
                 
                    onPress={ () => {
                       
                        loadSound(1);
                        
                        // playPBO();
                    }}
                    style={[Styles.soundbutton, Styles.sb2, { backgroundColor: 'lightgreen', }]}>
                 </Pressable>

                <Pressable

                    onPress={() => {
                        loadSound(2);
                      // playPBO();
                    }}
                    style={[Styles.soundbutton, Styles.sb3, { backgroundColor: 'lightyellow', }]}>
                   
                </Pressable>

      
              
            </View>
                    
                <View style={{top:-60 }}>

                    <Text style={Styles.headText }>Record and play up to 4 recording</Text>

                <Button
                    style={Styles.startStop}
                    title={recordings[0] ? 'Stop Recording' : 'Start Recording'}
                    onPress={() => (recordings[0] ? stopRecording(0) : startRecording())}
                   
                    />

              
                   
                    {
                        recordingsUri[0] &&
                        <Button
                        title="Play 1"
                        onPress={() => playRecording(0)}
                        style={Styles.play }
                        />
                    }
                   

                  
                    {
                        recordingsUri[1] &&
                        <Button
                        title="Play 2"
                        onPress={() => playRecording(1)}
                        style={Styles.play}

                        />
                    }       
                   
                    {
                        recordingsUri[2] &&
                        <Button
                        title="Play 3"
                        onPress={() => playRecording(2)}
                        style={Styles.play}
                        />
                    }

                    {
                        recordingsUri[3] &&
                        <Button
                        title="Play 4"
                        onPress={() => playRecording(3)}
                        style={Styles.play}
                        />
                    }


                    <Button
                        title={recordingsUri.length > 0 ? 'Clear Recording' : ''}
                        onPress={clearRecording}
                    />

                </View>


      

                       
         </View>



          
        
    );
}

    