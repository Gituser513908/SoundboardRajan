Soundboard assignment by Rajan Chaudhari

Dependencies:

import { useState, useEffect, useCallback } from 'react';
import { Alert,Button, Text, Pressable, View } from 'react-native';
import { Link, useNavigation, useLocalSearchParams, } from 'expo-router';
import { Audio } from 'expo-av';
import Styles from '../styles/page-styles';

BUGS:
When you press first any preprogrammed button it wont play but second press it works. something to do with loading of them and 
also sometimes previous sounds play even if you press the other button. my unload function maye be not be implemented properly.

recordings works fine
