import React from 'react'
import {Tabs} from '../components';
import {
  compose,
  withState,
  withHandlers,
  withProps
} from 'recompose'

const App = ({tabs, activeTab, setActiveTab}) => (
  <div className="container mt-2">
    <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}/>
  </div>
);

export default compose(
  withState('activeTab', 'setActiveTab', 0),
  withProps({
    tabs: [
      {title: 'title1', content: 'content1'},
      {title: 'title2', content: 'content2'},
      {title: 'title3', content: 'content3'},
    ],
  }),
  withHandlers({
    setActiveTab: ({setActiveTab}) => index => {
      setActiveTab(index)
    },
  })
)(App)
