import { h } from 'preact';
import style from './style.less';


const Progress = ({children, progress = 0}) => (
	<div class={style.outter} augmented-ui="tl-clip tr-clip br-clip bl-clip exe">
		<div class={style.inner} augmented-ui="tl-clip tr-clip br-clip bl-clip exe" style={{width: `${progress}%`}}/>
		<span class="neon">{children ? children : `${Math.round(progress)}%`}</span>
	</div>
);


export { Progress };
