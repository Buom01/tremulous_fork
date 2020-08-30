import { h } from 'preact';
import style from './style.less';


const Warning = ({children}) => (
	<div class={style.warning} augmented-ui="tl-clip tr-clip br-clip tr-clip-x exe">
		<span>Warning</span>
		{children}
	</div>
);

const Information = ({children}) => (
	<div class={style.information} augmented-ui="tl-clip tr-clip br-clip tr-clip-x exe">
		<span>Information</span>
		{children}
	</div>
);

const Alert = ({children}) => (
	<div class={style.alert} augmented-ui="tl-clip tr-clip br-clip tr-clip-x exe">
		<span>Alert</span>
		{children}
	</div>
);

export { Warning, Information, Alert };
