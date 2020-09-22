import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import classnames from 'classnames';
// import style from './style';

import { Extern } from '../../components/utils';
import { Generic, GenericListItem } from '../../components/block';
import blockClasses from '../../components/block/style.less';
import { Normal } from '../../components/block/layouts';
import { NoBreak } from '../../components/utils';

const Download = () => {
  const [os, setOs] = useState("linux");

  return (
    <Normal
      Component={Generic} width="65%" height="100%"
      list={
        <ul>
          <GenericListItem active={os == "linux"} action={()=>{setOs("linux")}}>
            <img src="assets/os/linux.svg" alt="Linux" class="emoticon"/> Linux
          </GenericListItem>
          <GenericListItem active={os == "windows"} action={()=>{setOs("windows")}}>
            <img src="assets/os/windows.svg" alt="Windows" class="emoticon"/> Windows
          </GenericListItem>
          <GenericListItem active={os == "macos"} action={()=>{setOs("macos")}} disabled>
            <img src="assets/os/macos.svg" alt="MacOS" class="emoticon"/> MacOS
          </GenericListItem>
          <GenericListItem active={os == "generic"} action={()=>{setOs("generic")}} disabled>
            <img src="assets/os/generic.svg" alt="Generic OS" class="emoticon"/> Generic
          </GenericListItem>
          <GenericListItem active={os == "launcher"} action={()=>{setOs("launcher")}} disabled>
            <img src="assets/os/launcher.svg" alt="Buom_01's launcher" class="emoticon"/> Launcher
          </GenericListItem>
        </ul>
      }
    >
      <p style="text-align:center">
        <br/>
        Currently no downloads are available<br/>
        Keep tracks on the <Extern href="https://github.com/Buom01/tremulous/releases">GitHub release page</Extern> or build it yourself by typing <i>make</i><br/>
        <br/>
        Note: You should compile with gcc-9: <NoBreak><i>TOOLS_CC=gcc-9 GCC=gcc-9 CC=cc-9 CXX=g++-9 make</i></NoBreak>
      </p>
      {/*
        os == "Linux" &&
          <Fragment>
            <p>Installer</p>
            <p>Archive</p>
          </Fragment>
      */}
    </Normal>
  );
};

export default Download;
