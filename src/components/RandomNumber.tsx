import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

export interface RandomNumberProps {
    index : number;
    randomNumber : number;
    onPress: (x:number) => void; 
    isDisabled: boolean; 
}

export const RandomNumber= ({index, randomNumber, onPress,isDisabled}:RandomNumberProps) => {

  return (
    <TouchableOpacity style={[tw`m-2 p-2 w-1/3 bg-white border border-slate-500`, isDisabled && tw`opacity-25`]} onPress={()=>onPress(index)} disabled={isDisabled}>
      <Text style={tw`self-center`} key={index}>
        {randomNumber}
      </Text>
    </TouchableOpacity>
  );
};
