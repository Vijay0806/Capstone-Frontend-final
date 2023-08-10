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
           <div class="flex flex-col items-center">
  <img class="md:w-8 w-6" src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" alt="hey" />
  <span class="whitespace-nowrap font-bold text-sm text-black-500 mt-2">𝕋𝕣𝕠𝕡𝕚𝕔𝕒𝕝</span>
</div>

          
          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
                <div class="flex flex-col items-center">
        <img class="md:w-8 w-6" src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="hey" />
        <span class="whitespace-nowrap font-bold text-sm text-black-500 mt-2">ℕ𝕒𝕥𝕚𝕠𝕟𝕒𝕝ℙ𝕒𝕣𝕜𝕤 </span>
      </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
          <div class="flex flex-col items-center">
        <img class="md:w-8 w-6" src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="hey" />
        <span class="whitespace-nowrap font-bold text-sm text-black-500 mt-2">𝔸𝕞𝕒𝕫𝕚𝕟𝕘 ℙ𝕠𝕠𝕝𝕤</span>
      </div>

          </Tab>
          
          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' alt='hey' />
              <span class="whitespace-nowrap font-bold text-sm text-black-500 mt-2">𝔹𝕖𝕒𝕔𝕙𝕖𝕤</span>
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg' alt='hey' />
              <span class="whitespace-nowrap font-bold text-sm text-black-500 mt-2">𝕋𝕚𝕟𝕪ℍ𝕠𝕞𝕖𝕤</span>
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg' alt='hey' />
              <span class="whitespace-nowrap font-bold text-sm text-black-500 mt-2">𝔻𝕖𝕤𝕚𝕘𝕟</span>
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg' alt='hey' />
              <span class="whitespace-nowrap font-bold text-sm text-black-500 mt-2">𝕀𝕤𝕝𝕒𝕟𝕕𝕤</span>
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' alt='hey' />
              <span class="whitespace-nowrap font-bold text-sm text-black-500 mt-2">𝕍𝕚𝕖𝕨</span>
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg' alt='hey' />
              <span class="whitespace-nowrap font-bold text-sm text-black-500 mt-2">ℂ𝕠𝕦𝕡𝕝𝕖</span>
            </div>

          </Tab>

          <Tab className='tabImg md:pr-1 pr-0'>
            <div className='w-8'>
              <img className='md:w-8 w-6' src='https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' alt='hey' />
              <span class="whitespace-nowrap font-bold text-sm text-black-500 mt-2">𝔸𝕣𝕔𝕥𝕚𝕔 </span>
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

