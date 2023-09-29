import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View, Animated, Easing, Dimensions} from 'react-native';
import tw from 'twrnc';
import {DealList} from '../components/DealList';
import {DealView} from '../components/DealView';

// export interface RandomNumberProps {
//     index : number;
//     randomNumber : number;
//     onPress: (x:number) => void;
//     isDisabled: boolean;
// }

const DEALS = [
  {
    id: '1',
    title: 'test',
    image:
      'https://crowdbotics.ghost.io/content/images/2020/08/React-Native-Featured-Image.png',
  },
  {
    id: '2',
    title: 'test 2',
    image:
      'https://crowdbotics.ghost.io/content/images/2021/08/React-Native--1-.png',
  },
];

export const Bakesale = () => {
  const [currentDealId, setCurrentDealId] = useState<string | null>(null);
  //const titleXPos = new Animated.Value(0);
  const titleXPos = useRef(new Animated.Value(0)).current;
  const width = Dimensions.get('window').width - 150;

  const animateTitle = (direction = 1) => {
    Animated.timing(titleXPos, {toValue: direction * (width/2), duration:1000 }).start(({finished})=>{
      console.log('finished--', finished);
      if(finished) animateTitle(-1 * direction);
    }
    );
  }
  useEffect(() => {
    // Animated.timing(titleXPos, {toValue:width/2, duration:1000, easing: Easing.linear }).start(
    //   ()=> Animated.timing(titleXPos, {toValue:-width/2}).start(
    //     ()=> Animated.timing(titleXPos, {toValue:0}).start()
    //   )
    // );
    animateTitle();
  }, []);

  const setCurrentDealIdCallback = (id: string) => {
    setCurrentDealId(id);
  };

  const clearCurrentDealId = () => {
    setCurrentDealId(null);
  };

  if (currentDealId) {
    return (
      <DealView
        deal={DEALS.find(x => x.id === currentDealId)}
        onPressBack={clearCurrentDealId}
      />
    );
  }
  return (
    <>
      <DealList deals={DEALS} onPress={setCurrentDealIdCallback} />
      <Animated.View style={[{left: titleXPos}, tw`flex`]}>
        <Text style={tw`text-4xl bg-red-500 self-center`}>San mLo</Text>
      </Animated.View>
    </>
  );
};
