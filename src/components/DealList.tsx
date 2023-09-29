import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ListRenderItem
} from 'react-native';
import tw from 'twrnc';
import {DealItemProps,DealItem} from '../components/DealItem';


export interface DealListProps {
  deals: DealItemProps[];
  onPress: (id:string) => void;
}

export const DealList = ({deals,onPress}: DealListProps) => {
  const renderItem = ({index,item}:{index:number, item:DealItemProps}) =>{
    return <DealItem item={item} onPress={onPress}/>
  }

  return (
    <SafeAreaView>
      <FlatList
        data={deals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
