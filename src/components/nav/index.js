import { h } from 'preact';
import style from './style';

import { Extern } from '../utils';


export const Nav = ({items}) => (
  <nav class={style.nav}>
    {
      items.map(
        (item) => (
          Array.isArray(item) ?
            (<a href={item[0]}>{item[1]}</a>) :
            (<a href={'#'+item.toLowerCase().split(" ").join("-")}>{item}</a>)
        )
      )
    }
  </nav>
)

export const Footer = () => (
  <footer class={style.footer}>
    <Extern href="https://github.com/Buom01/tremulous">GitHub project</Extern>
    <a href="/about">About</a>
  </footer>
)
