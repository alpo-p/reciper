import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import STitle from '../../../components/STitle';
import BottomButtons from './BottomButtons';
import { styles } from './sharedStyles';
import SingleItem from './SingleItem';

interface Props {
  name: string
  items: string[]
  handleLike: () => void
  isLiked: boolean
  navigateBackToMyRecipes?: boolean
}

const List = (props: Props) => {
  const { name, items, handleLike, isLiked, navigateBackToMyRecipes } = props;
  
  return (
    <View style={styles.topContainer}>
      <STitle style={styles.title}>{name}</STitle>
      <FlatList
        style={styles.container}
        data={items}
        renderItem={({ item }) => <SingleItem item={item} />}
        keyExtractor={(i) => i}
      />
      <BottomButtons handleLike={handleLike} isLiked={isLiked} navigateBackToMyRecipes={navigateBackToMyRecipes} />
    </View>
  );
};

export default List;