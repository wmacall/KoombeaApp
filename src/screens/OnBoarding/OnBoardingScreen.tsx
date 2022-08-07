import React, {useCallback, useState} from 'react';
import {FlatList, Image, StatusBar, Text, View} from 'react-native';
import {COLORS} from '@assets';
import {SLIDES} from '@constants';
import {screen} from '@utils';
import {ButtonSlider} from '@components';
import styles from './OnBoarding.styles';

export const OnBoardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastElement =
    activeIndex === SLIDES.indexOf(SLIDES[SLIDES.length - 1]);

  const onScroll = useCallback(
    event => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);
      const distance = Math.abs(roundIndex - index);
      const isDistanceCompleted = distance > 0.4;
      if (roundIndex !== activeIndex && !isDistanceCompleted) {
        setActiveIndex(roundIndex);
      }
    },
    [activeIndex],
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.DODGER_BLUE}
      />
      <FlatList
        scrollEventThrottle={16}
        decelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        snapToInterval={screen.width}
        pagingEnabled
        data={SLIDES}
        onScroll={onScroll}
        renderItem={({item}) => (
          <View style={styles.containerSlide}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.textSlide}>{item.title}</Text>
          </View>
        )}
      />
      <View style={styles.containerDots}>
        {Array.from({length: SLIDES.length}).map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeIndex && styles.activeDot]}
          />
        ))}
      </View>
      {isLastElement ? <ButtonSlider /> : null}
    </View>
  );
};
