import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import FirstTask from './src/examples/FirstTask';
import FlatListComponent from './src/examples/FlatListComponent';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Task: FirstTask,
    List: FlatListComponent,
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
