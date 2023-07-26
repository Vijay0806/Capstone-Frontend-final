import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import "../src/styles/Tabs.css"
import Page1 from './components/Page1';
import Page2 from "./components/Page2"
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";
import Page9 from "./components/Page9";
import Page10 from "./components/Page10";
//border-bottom : none;
const TabsComp = ({ toggle, setToggle }) => {




  return (
    <>

      <Tabs>
        <TabList className="placeTabs-hold">
          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg' alt='hey' />
            </div>

          </Tab>
          
          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg' alt='hey' />
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg' alt='hey' />
            </div>

          </Tab>

        </TabList>



        <TabPanels>
          <TabPanel className="tab-content"> <Page1 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Page2 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Page3 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Page4 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Page5 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Page6 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Page7 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Page8 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Page9 pushDown={toggle} />  </TabPanel>
          <TabPanel className="tab-content"> <Page10 pushDown={toggle} />  </TabPanel>
          
        </TabPanels>

      </Tabs >

    </>
  )
}

export default TabsComp
//         <TabList className={toggle === true? "tabs-hold-pushDown" : "tabs-hold"}>

