import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Link from "next/link";
import EditIcon  from '@mui/icons-material/Edit';
import  HomeIcon from '@mui/icons-material/Home';
import  Settings from '@mui/icons-material/Settings';
import  MenuIcon from '@mui/icons-material/Menu';
import {useRouter} from "next/router";

const SideNav = () => {
  const router = useRouter();
  const [collaps, setCollaps] = useState(true)
  const setCollapsed = () => {
    collaps ? setCollaps(false) : setCollaps(true)
  }

  return (
    <>
      <div id="sb">
        <ProSidebar
          collapsed={collaps}
          onBlur={() => setCollaps(true)}
        >
          <SidebarHeader>
            <div onClick={setCollapsed} className='closemenu'>
              <MenuIcon />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                icon={<HomeIcon />}
                active={router.pathname === '/'}
              >
                <Link href='/'><a>Home</a></Link>
              </MenuItem>
              <MenuItem
                icon={< EditIcon />}
                active={router.pathname.slice(0, 7) === '/lang'}
              >
                <Link href='/lang'><a>Editor</a></Link>
              </MenuItem>
              <MenuItem
                icon={<Settings />}
                active={router.pathname === '/setting'}
              >
                <Link href="/setting"><a>Setting</a></Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideNav;