import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Button, Text, View} from 'react-native';
import tw from 'twrnc';
import {RandomNumber} from '../components/RandomNumber';
import shuffle from 'lodash/shuffle';

export const GameScreen = () => {
  const [slectedNumbersIndex, setSlectedNumbersIndex] = useState<number[]>([]);
  const [remainingSecond, setRemainingSecond] = useState<number>(10);

  useEffect(() => {
    if (remainingSecond === 0) return;
    const interval = setInterval(() => {
      setRemainingSecond(remainingSecond - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingSecond]);

  const tragetNumber: number = useMemo(() => {
    return Math.floor(40 * Math.random());
  }, []);

  const randomNumbers = useMemo(() => {
    return Array.from({length: 6}).map(
      () => 1 + Math.floor(10 * Math.random()),
    );
  }, []);

  const shuffleNumbers = useMemo(() => {
    return shuffle(randomNumbers);
  }, []);

  const isDisabled = (selectValue: number): boolean => {
    const result = slectedNumbersIndex.indexOf(selectValue);
    return result === -1 ? false : true;
  };

  const gameStatus = useCallback(() => {
    const sum: number = slectedNumbersIndex.reduce(
      (accumulator, currentValue) => accumulator + randomNumbers[currentValue],
      0,
    );

    if (sum > tragetNumber || remainingSecond === 0) {
      return 'LOST';
    }

    if (sum < tragetNumber) {
      return 'PLAYING';
    }
    if (sum === tragetNumber) {
      return 'WON';
    }
  }, [slectedNumbersIndex, remainingSecond]);

  const gameStatusValue = gameStatus();
  console.log('gameStatusValue', gameStatusValue);
  const onReset = () => {
    setSlectedNumbersIndex([]);
    setRemainingSecond(10);
  };
  return (
    <View style={tw`flex justify-center border border-red-500`}>
      <View style={tw`self-center border`}>
        <Text style={tw`text-2xl text-black`}>{tragetNumber}</Text>
      </View>
      <View style={tw`flex flex-row flex-wrap m-4 justify-around bg-red-300`}>
        {shuffleNumbers.map((value: number, index: number) => (
          <RandomNumber
            index={index}
            randomNumber={value}
            onPress={value =>
              setSlectedNumbersIndex([...slectedNumbersIndex, value])
            }
            isDisabled={isDisabled(index) || gameStatusValue !== 'PLAYING'}
          />
        ))}
      </View>
      <Button onPress={onReset} title="Play Again" color="#841584" />
      <Text>
        {gameStatusValue} {remainingSecond}{' '}
      </Text>
    </View>
  );
};
