import React from 'react';
import * as s from './Sidebar.Styles';
const Sidebar = (props) => {
  const { MainImage, SidebarHeader = '', mainItem = [] } = props;

  const menuItemJsx = mainItem.map((item, index) => {
    return <s.MainItem key={index}>{item.name}</s.MainItem>;
  });
  return (
    <>
      <s.SidebarContainer>
        <s.MainImage>{MainImage}</s.MainImage>
        <s.SidebarHeader>{SidebarHeader}</s.SidebarHeader>
        <s.MenuItemContainer>{menuItemJsx}</s.MenuItemContainer>
      </s.SidebarContainer>
    </>
  );
};
export default Sidebar;
