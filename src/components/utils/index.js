import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style';

const Extern = ({href, class: _class, children}) => (
  <a href={href} class={_class} target="_blank" rel="noopener">{children}</a>
);

const Link = ({href, class: _class, children}) => (
  <Extern href={children} class={_class} target="_blank" rel="noopener">{children}</Extern>
);

const NonCritical = ({children}) => {
  const [rendered, setRendered] = useState(false);
  if (!rendered && typeof window != "undefined")
    window.setTimeout(()=>{setRendered(true)});
  return (rendered ? children : null);
}

const NoBreak = ({children}) => (
  <span class={style.nobreak}>{children}</span>
)

export { Extern, Link, NonCritical, NoBreak };
