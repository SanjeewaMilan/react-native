import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import {DealCard} from './DealCard';

export interface DealItemProps {
  title: string;
  id: string;
  image: string;
}

export const DealItem = ({
  item,
  onPress,
}: {
  item: DealItemProps;
  onPress: (id: string) => void;
}) => {
  const onClickHandler = () => {
    onPress(item.id);
  };

  return (
    <TouchableOpacity onPress={onClickHandler}>
      <DealCard deal={item} />
    </TouchableOpacity>
  );
};
