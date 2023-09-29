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
import { DealItemProps } from './DealItem';

export const DealCard = ({deal}:{deal:DealItemProps}) => {

  return (
    <View style={tw`bg-slate-50 rounded-md shadow-xl p-4 m-2`}>
      <Image
        style={[tw`h-50`]}
        source={{uri:deal.image}}
      />
      <Text>{deal.title}</Text>
      <Text>Deal Card</Text>
    </View>
  );
};
