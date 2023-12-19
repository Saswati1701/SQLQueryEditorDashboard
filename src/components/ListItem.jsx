import React, { useState } from 'react';
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

const ListItem = ({ obj, marginLeft }) => {
  const [expandedState, setExpandedState] = useState({});
  const [hasClicked, setHasClicked] = useState(false)

  const handleExpandToggle = (index) => {
    setHasClicked(!hasClicked);
    setExpandedState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const isExpandable = typeof obj === 'object' && Array.isArray(obj) && obj.length > 0 && typeof obj[0] === 'object';

  return (
    <div>
      <div style={{ marginLeft: marginLeft }}>
        {isExpandable ? (
          obj.map((item, index) => (
            <div key={index}>
              <p onClick={() => handleExpandToggle(index)} className={item.slug}>
              {hasClicked ? <GoTriangleDown /> : <GoTriangleRight />} {item.name}
              </p>
              {expandedState[index] && <ListItem obj={item.array} marginLeft={marginLeft + 8} />}
            </div>
          ))
        ) : (
          obj.map((item, index) => <p key={index}>{item}</p>)
        )}
      </div>
    </div>
  );
};

export default ListItem;