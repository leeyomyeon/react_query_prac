import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import TabComponents from './TabComponents';
const tabList = [
  {
    eventKey: 'home',
    title: 'Home',
    name: 'Tab Home',
    location: 'testpage1/TestPage',
    fileName: 'TestPage'
  },
  {
    eventKey: 'profile',
    title: 'Profile',
    name: 'Tab Profile',
    location: ''
  },
  {
    eventKey: 'contract',
    title: 'Contract',
    name: 'Tab Contract',
    location: ''
  },
]
const ActiveTabs = () => {
  return (
    <Tabs
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      {tabList.map((item) => {
        return (
          <Tab eventKey={item.eventKey} title={item.title} unmountOnExit={true} key={`Tab-${item.eventKey}`}>
            {item.name}
            {item.location !== '' && (
              // <TestPage />
              <TabComponents location={item.location} fileName={item.fileName} key={`TabComponents-${item.fileName}`}/>
            )}
          </Tab>
      )
      })}
    </Tabs>
  )
}

export default ActiveTabs;