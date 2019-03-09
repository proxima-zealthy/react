import React from 'react';
import {classList} from "../utils";
import 'Tabs.scss';

export default props => {
  return (
    <ul className={classList('Tabs', props.customClass)}>
      {props.tabsList.map((tab, ix) => (
        <li key={ix}>
          {tab}
        </li>
      ))}
    </ul>
  )
};
