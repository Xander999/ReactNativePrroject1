/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MesChart from './MesChart';
import uploadLocalMachine from './uploadLocalMachine';

AppRegistry.registerComponent(appName, () => MesChart);
