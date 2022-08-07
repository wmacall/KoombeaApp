import React from 'react';
import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {COLORS} from '@assets';
import {SLIDES} from '@constants';
import {screen} from '@utils';
import styles from './OnBoarding.styles';

export const OnBoardingScreen = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={COLORS.DODGER_BLUE} />
    <ScrollView
      scrollEventThrottle={16}
      decelerationRate="fast"
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      snapToInterval={screen.width}
      pagingEnabled>
      {SLIDES.map(({image, title}, index) => (
        <View style={styles.containerSlide} key={index}>
          <Image style={styles.image} source={image} />
          <Text style={styles.textSlide}>{title}</Text>
        </View>
      ))}
    </ScrollView>
    <View style={styles.containerDots}>
      {Array.from({length: SLIDES.length}).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, index === 0 && styles.activeDot]}
        />
      ))}
    </View>
  </View>
);
