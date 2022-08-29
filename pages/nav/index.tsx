import styles from "./index.module.scss";
import { useLayoutEffect, useRef, useState } from "react";
import cn from "classnames";

export default function Pictures() {
  const menuRef = useRef(null);

  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
  });
  const [activeStatus, setActiveStatus] = useState({
    dashboard: true,
    leave: false,
    admin: false,
  });

  const handleClick = (title) => {
    const status = {
      dashboard: false,
      leave: false,
      admin: false,
    };
    status[title] = true;
    setActiveStatus(status);
    const newUnderlineStyle = {
      width: 0,
      left: 0,
    };
    if (title === "dashboard") {
      newUnderlineStyle.width = menuRef.current.children[0].clientWidth;
      newUnderlineStyle.left = menuRef.current.children[0].offsetLeft;
    }
    if (title === "leave") {
      newUnderlineStyle.width = menuRef.current.children[1].clientWidth;
      newUnderlineStyle.left = menuRef.current.children[1].offsetLeft;
    }
    if (title === "admin") {
      newUnderlineStyle.width = menuRef.current.children[2].clientWidth;
      newUnderlineStyle.left = menuRef.current.children[2].offsetLeft;
    }
    setUnderlineStyle(newUnderlineStyle);
  };

  const isActive = (title) => {
    return activeStatus[title];
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu} ref={menuRef}>
          <span
            className={cn(styles.title, {
              [styles.activeTitle]: isActive("dashboard"),
            })}
            onClick={() => handleClick("dashboard")}
          >
            Dashboard
          </span>
          <span
            className={cn(styles.title, {
              [styles.activeTitle]: isActive("leave"),
            })}
            onClick={() => handleClick("leave")}
          >
            Leave
          </span>
          <span
            className={cn(styles.title, {
              [styles.activeTitle]: isActive("admin"),
            })}
            onClick={() => handleClick("admin")}
          >
            Admin
          </span>
        </div>
        <span className={styles.underline} style={underlineStyle}></span>
      </div>
    </>
  );
}
