import React from 'react'
import classNames from 'classname'

const linkTabClasses = (index, activeTab) => (
  classNames('nav-link', {active: index === activeTab})
);

const Tabs = ({tabs, activeTab, onTabChange}) => (
  <div>
    <ul className='nav nav-tabs'>
      {
        tabs.map(({title, content}, index) => (
          <li key={index} className='nav-item'>
            <a className={linkTabClasses(index, activeTab)} onClick={() => onTabChange(index)}>{title}</a>
          </li>
        ))
      }
    </ul>
    <div className='tab-content'>
      <div className='tab-pane active'>{tabs[activeTab].content}</div>
    </div>
  </div>
);

export default Tabs