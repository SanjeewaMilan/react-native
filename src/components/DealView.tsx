import React, {useEffect} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import {DealCard} from './DealCard';
import {DealItemProps} from './DealItem';

export interface DealViewProps {
  deal : DealItemProps , 
  onPressBack : () => void,
}

export const DealView = ({deal, onPressBack} : DealViewProps) => {

  return (
    <>
      <Button onPress={onPressBack} title="Back" color="#841584" />
      <DealCard deal={deal} />
    </>
  );
};
