import React from "react";
import Toolbar, { Item } from "devextreme-react/toolbar";
import Button from "devextreme-react/button";
import UserPanel from "../user-panel/user-panel";
import "./header.scss";
import { Template } from "devextreme-react/core/template";
import { Link } from "react-router-dom";

export default ({ menuToggleEnabled, title, toggleMenu, userMenuItems }) => (
  <header className={"header-component"}>
    <Toolbar className={"header-toolbar"}>
      <Item
        visible={menuToggleEnabled}
        location={"before"}
        widget={"dxButton"}
        cssClass={"menu-button"}
      >
        <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
      </Item>
      <Item
        location={"before"}
        cssClass={"header-title"}
        text={title}
        visible={!!title}
      />
      {process.env.REACT_APP_WITH_SIDEBAR === "false" && (
        <Item>
          <ul className="nav-list">
            <li className="nav-menu">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-menu">
              <Link to="/houses">Houses</Link>
            </li>
            <li className="nav-menu">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="nav-menu">
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
        </Item>
      )}
      <Item
        location={"after"}
        locateInMenu={"auto"}
        menuItemTemplate={"userPanelTemplate"}
      >
        <Button
          className={"user-button authorization"}
          width={210}
          height={"100%"}
          stylingMode={"text"}
        >
          <UserPanel menuMode={"context"} />
        </Button>
      </Item>
      <Template name={"userPanelTemplate"}>
        <UserPanel menuMode={"list"} />
      </Template>
    </Toolbar>
  </header>
);
