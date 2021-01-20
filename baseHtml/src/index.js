import { registerMicroApps, initGlobalState, start } from 'qiankun';


const actions = initGlobalState({
  string: ''
})


actions.onGlobalStateChange((state, prev) => {
  console.log('master global state change event', state, prev)
})


registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#root',
    activeRule: '/app-react',
  }
]);

start();