import React from 'react';
import {classList} from "../utils";
import 'Tabs.scss';

export default props => {
  //const Path=props.currentPath;
  //className={Path.includes(tab.toLowerCase())?`active`:``}

  return (
    
    <nav id="tabs">
      <ul className={classList('Tabs', props.customClass)}>
        {props.tabsList.map((tab, ix) => (
          <li key={ix}>
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  )
};



