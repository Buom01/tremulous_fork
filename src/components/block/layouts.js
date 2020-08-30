import { h } from 'preact';
import style from './style.less';
import classnames from 'classnames';

import { Generic, Alien, Human } from './index';

const Basic = ({Component, children, width = 600, height = 400, big, class: _class}) => (
  <Component vertical width={width} height={height} big={big} class={_class}>
    <Component sub basic augmented={Component == Human ? "tl-clip tr-clip bl-clip br-clip exe" : "tl-round tr-round bl-round br-round exe"} class="v-cell-expand">
      <div class="textblock">
        {children}
      </div>
    </Component>
  </Component>
);

const Simple = ({Component, title, children, width = 600, height = 400, big, class: _class}) => (
  <Component vertical width={width} height={height} big={big} class={_class}>
    <h3>{title}</h3>
    <div class="v-cell-expand">
      <Component sub basic augmented={Component == Human ? "bl-clip br-clip exe" : "bl-round br-round exe"} class="v-cell-expand">
        <div class="textblock">
          {children}
        </div>
      </Component>
    </div>
  </Component>
);

const Normal = ({Component, list, title, children, actions, width = 600, height = 400, big, class: _class}) => {
  const corner = Component == Human ? "clip" : "round";
  const mainClass = classnames(
    !title && `tr-${corner}`,
    !actions && `br-${corner}`,
    'exe');

  return (
    <Component width={width} height={height} big={big} class={_class}>
      <div class="Cell -4of12">
        <Component sub list augmented={`tl-${corner} bl-${corner} exe`}>
          {list}
        </Component>
      </div>
      <div class="Cell -fill v-grid">
        {title && <h3>{title}</h3>}
        <Component sub basic augmented={mainClass} class="v-cell-expand">
          <div class="textblock">
            {children}
          </div>
        </Component>
        {actions &&
          <div class={style.actions}>
            {actions}
          </div>
        }
      </div>
    </Component>
  )
};

export { Basic, Simple, Normal };
