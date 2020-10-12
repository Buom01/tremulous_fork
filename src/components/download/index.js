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
          <GenericListItem active={os == "macos"} action={()=>{setOs("macos")}}>
            <img src="assets/os/macos.svg" alt="MacOS" class="emoticon"/> MacOS
          </GenericListItem>
          {/*<GenericListItem active={os == "generic"} action={()=>{setOs("generic")}} disabled>
            <img src="assets/os/generic.svg" alt="Generic OS" class="emoticon"/> Generic
          </GenericListItem>*/}
          <GenericListItem active={os == "launcher"} action={()=>{setOs("launcher")}}>
            <img src="assets/os/launcher.svg" alt="Buom_01's launcher" class="emoticon"/> Launcher
          </GenericListItem>
        </ul>
      }
    >
      {
        (os == "linux" || os == "windows") &&
          <Fragment>
            <p style="text-align:center">
              <br/>
              <strong>Currently only archive format is available:</strong><br/>
              <Extern href="https://github.com/Buom01/tremulous/releases">GitHub releases page</Extern><br/>
              <br/>
              <br/>
              <strong>From sources:</strong><br/>
              You may need to compile with:<br/>
              <NoBreak>$ TOOLS_CC=gcc-9 GCC=gcc-9 CC=cc-9 CXX=g++-9 make</NoBreak><br/>
              on latest Linux distros.
            </p>
          </Fragment>
      }
      {
        (os == "macos") &&
          <Fragment>
            <p style="text-align:center">
              <br/>
              <strong>I don't provide MacOS binary as I can't compile it</strong><br/>
              <br/>
              <NoBreak>
                $ git clone <Extern href="https://github.com/Buom01/tremulous">https://github.com/Buom01/tremulous</Extern> buom01-trem<br/>
                $ cd buom01-trem<br/>
                $ git checkout server  # lookup activity to find the lastest active branch<br/>
                $ make<br/>
              </NoBreak><br/>
              You may then need to import gpp and 1.1 assets and map<br/>
              (else the game will look strange as it need them !!)
            </p>
          </Fragment>
      }
      {
        (os == "launcher") &&
          <Fragment>
            <p style="text-align:center">
              <br/>
              <strong>The Launcher which I began is not in a usable state.</strong><br/>
              Also, even if I will open-source it, I'm still unsure about which lisence I will give it.<br/>
              It will aim to work with multiple Tremulous fork.
            </p>
          </Fragment>
      }
    </Normal>
  );
};

export default Download;
