import React from 'react';
import { StyleSheet, View } from 'react-native';
import SText from '../../../../../../../components/SText';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  tags: string[]
}

const Tag = ({ tag }: {tag: string}) => (
  <View style={styles.tag}>
    <SText>{tag}</SText>
  </View>
);

const RecipeTags = (props: Props) => {
  const tags = props.tags;

  return (
    <View testID='recipeTags'>
      {tags.map(tag => <Tag key={tag} tag={tag} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    borderWidth: 1,
    borderRadius: 1
  }
});

export default RecipeTags;