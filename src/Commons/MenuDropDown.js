import ClayLink from '@clayui/link';
import ClayDropDown from '@clayui/drop-down';
import React, { useState, useRef } from 'react';

function MenuDropDown({title, items}) {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <ClayDropDown
        trigger={<ClayLink href="#" className="nav-link link-outline link-outline-borderless">{title}</ClayLink>}
        active={expand}
        onActiveChange={setExpand}
      >
        <ClayDropDown.ItemList>
          {items.map((item, i) => (
            <ClayDropDown.Item href={item.href} key={i}>
              {item.label}
            </ClayDropDown.Item>
          ))}
        </ClayDropDown.ItemList>
      </ClayDropDown>
    </>
  );
}

export default MenuDropDown;