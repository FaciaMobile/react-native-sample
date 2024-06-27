/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NativeModules } from 'react-native';
const { FaciaReactNativeModule } = NativeModules;

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
}

function App(): JSX.Element {
  const onPress = async () => {
    const config = {
      showConsent: true,
      showVerificationType: true,
      showResult: true,
      photo_id_match: false,
      livenessRetryFlow: false,
      documentRetryFlow: false,
      dimLightDetection: true,
      showMiddleInstructions: false,
      livenessRetryCount: 0,
      documentRetryCount: 0,
      faceDetectionThreshold: 'MEDIUM',
      ovalSize: 'LARGE',
      livenessType: 'ADDITIONAL',
    };

    FaciaReactNativeModule.verify('ACCESS_TOKEN', JSON.stringify(config), (res) => {
      const parsedResponse = JSON.parse(res);
      console.log('event:', parsedResponse);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.centeredView} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#0056b3" // Darker blue when pressed
          onPress={onPress}
        >
          <Text style={styles.buttonText}>Open Facia SDK</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
  },
  buttonContainer: {
    margin: 16,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF', // Blue background
    width: 200, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    borderRadius: 10, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 18,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;