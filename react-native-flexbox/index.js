import { registerRootComponent } from 'expo';

import FlexDirectionBasics from './components/JustifyContentBasics';
import JustifyContentBasics from './components/JustifyContentBasics';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(JustifyContentBasics);
