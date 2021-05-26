import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import theme from '../../../theme';
import { IRecipe } from '../../../types';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { height: theme.dimensions.height, width: theme.dimensions.width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

interface Props {
  testID: string
  recipe: IRecipe
  handleLikeRecipe: (id: string) => void
}

// Täältä 
export default function TabViewExample(props: Props) {
  const { testID } = props;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <View testID={testID}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 200,
    marginTop: theme.dimensions.statusBar,
  },
  scene: {
    flex: 1,
  },
});
