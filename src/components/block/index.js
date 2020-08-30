import { h } from 'preact';
import style from './style.less';
import classnames from 'classnames';

const Block = ({class: _class, children, augmented, sub, basic, vertical, height, width}) => (
	<div class={_class} augmented-ui={augmented} style={{height, width}}>
		{
			(sub || basic) ?
			(
				children
			) :
			(
				<div class={vertical ? "v-grid" : "Grid Grid-stretch"} style={{height:"100%"}}>
					{children}
				</div>
			)
		}
	</div>
);

const Generic = (props) => {
	const {sub, list, big, class: _class, augmented} = props;
	const className = classnames(style.generic, {
			[style.generic_sub]: sub,
			[style.generic_list]: !!list,
			[style.big]: big
		}, _class);

	return (<Block {...props} class={className} augmented={augmented || "tl-round tr-round bl-round br-round exe"}/>);
};

const Alien = (props) => {
	const {sub, list, big, class: _class, augmented} = props;
	const className = classnames(style.alien, {
			[style.alien_sub]: sub,
			[style.alien_list]: list,
			[style.big]: big
		}, _class);

	return (<Block {...props} class={className} augmented={augmented || "tl-round tr-round bl-round br-round exe"}/>);
};

const Human = (props) => {
	const {sub, list, big, class: _class, augmented} = props;
	const className = classnames(style.human, {
			[style.human_sub]: sub,
			[style.human_list]: list,
			[style.big]: big
		}, _class);

	return (<Block {...props} class={className} augmented={augmented || "tl-clip tr-clip bl-clip br-clip exe"}/>);
};

const ListItem = ({action, children, augmented, active, disabled}) => (
	<li class={classnames(active && style.active, disabled && "disabled")}>
		<span onclick={(disabled && action) ? null : action} tabindex="0" augmented-ui={augmented}>
			{children}
		</span>
	</li>
);

const GenericListItem = (props) => (
	<ListItem {...props} augmented="tl-round bl-round exe"/>
);

const AlienListItem = (props) => (
	<ListItem {...props} augmented="tl-round bl-round exe"/>
);

const HumanListItem = (props) => (
	<ListItem {...props} augmented="tl-fold bl-fold exe"/>
);

export { Generic, Alien, Human, GenericListItem, AlienListItem, HumanListItem };
