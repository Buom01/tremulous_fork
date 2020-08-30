import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Waypoint } from 'react-waypoint';
import style from './style';

const Section = ({children}) => {
	const [draw, setDraw] = useState(false);

	return (
		<Waypoint onEnter={()=>{setDraw(true)}}>
			<section class={"Grid Grid-middle " + style.section + " " + (draw ? style.show : style.hide)} style={!draw && "visibility:hidden"}>
				{children}
			</section>
		</Waypoint>
	)
};

const Content = ({children}) => (
	<div class={"Cell -7of12 middle " + style.content}>
		{children}
	</div>
);

const Media = ({children}) => (
	<div class={"Cell -5of12 middle"}>
		{children}
	</div>
);

export { Section, Content, Media };
