import React from 'react';
import { StyleSheet, View } from 'react-native';
import SText from '../SText';
import theme from '../../theme';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  tags: string[]
}

const Tag = ({ tag }: {tag: string}) => (
  <View style={styles.tag}>
    <View style={styles.textContainer}>
      <SText style={styles.text}>{tag}</SText>
    </View>
  </View>
);

const RecipeTags = (props: Props) => {
  const tags = props.tags;

  return (
    <View style={styles.container} testID='recipeTags'>
      {tags.map(tag => <Tag key={tag} tag={tag} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tag: {
    marginRight: 2,
    padding: 1,
    borderWidth: 0.5,
    borderColor: theme.colors.lightGrey,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 7,
  },
  text: {
    fontSize: theme.fontSizes.small,
  }
});

export default RecipeTags;