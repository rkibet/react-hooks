import React,{useReducer} from 'react'
import ClassComponent from './components/ClassComponent'
import ClassTimer from './components/ClassTimer'
import CounterHook from './components/CounterHook'
import CustomForms from './components/CustomForms'
import CustomHookCounter from './components/CustomHookCounter'
import CustomHooks from './components/CustomHooks'
import CustomHookTwo from './components/CustomHookTwo'
import DataFetching from './components/DataFetching'
import DataFetchingWithId from './components/DataFetchingWithId'
import HookC from './components/HookC'
import HookMouse from './components/HookMouse'
import HookReducer from './components/HookReducer'
import HookReducerA from './components/HookReducerA'
import HookReducerB from './components/HookReducerB'
import HookReducerC from './components/HookReducerC'
import HookReducerFetching from './components/HookReducerFetching'
import HookReducerFetchingTwo from './components/HookReducerFetchingTwo'
import HookReducerThree from './components/HookReducerThree'
import HookReducerTwo from './components/HookReducerTwo'
import HookRef from './components/HookRef'
import HooksCounter from './components/HooksCounter'
import HooksCounterFive from './components/HooksCounterFive'
import HooksCounterFour from './components/HooksCounterFour'
import HooksCounterInterval from './components/HooksCounterInterval'
import HooksCounterThree from './components/HooksCounterThree'
import HooksCounterTwo from './components/HooksCounterTwo'
import HookTimer from './components/HookTimer'
import IntervalClassCounter from './components/IntervalClassCounter'
import MouseClass from './components/MouseClass'
import MouseContainer from './components/MouseContainer'
export const userContext=React.createContext()
export const ChannelContext=React.createContext()
export const CounterContext=React.createContext()

const initialState=0
const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      return state+1;
    case 'decrement':
      return state-1;
    case 'reset':
      return initialState;
    default:
      return state;

  }
}
function App() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (

    <div>
        <CustomForms/>
        <CustomHookCounter/>
        <CustomHookCounter/>
        <CustomHooks/>
        <CustomHookTwo/>
        <HookTimer/>
        <ClassTimer/>
        <HookRef/>
        <CounterHook/>
        <HookReducerFetchingTwo/>
        <CounterContext.Provider value={{countState:count,countDispatch:dispatch}}></CounterContext.Provider>
        <div>{count}</div>
        <HookReducerFetching/>
        <HookReducerA/>
        <HookReducerB/>
        <HookReducerC/>
        <HookReducerThree/>
        <HookReducerTwo/>
        <HookReducer/>
        <userContext.Provider value='Ronald'>
        <ChannelContext.Provider value='Agronsons'>
        <HookC/>
        </ChannelContext.Provider>
        </userContext.Provider>
        <DataFetchingWithId/>
        <DataFetching/> 
        <HooksCounterInterval/>
        <IntervalClassCounter/>
        <MouseContainer/>
        <HookMouse/>
        <MouseClass/>
        <HooksCounterFive/>
        <HooksCounterFour/>
        <HooksCounterThree/>
        <HooksCounterTwo/>
        <HooksCounter/>
        <ClassComponent/>
    </div>
  
  );
}

export default App;
