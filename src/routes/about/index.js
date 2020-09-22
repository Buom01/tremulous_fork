import { h, Fragment } from 'preact';
import style from './style'

import { Extern, Link } from '../../components/utils';
import { Nav, Footer } from '../../components/nav';
import { Generic } from '../../components/block';
import { Basic, Simple, Normal } from '../../components/block/layouts';
import { Information } from '../../components/message';


const Home = () => (
	<div class={style.page}>

		<h1 class="title">About Buom_01's Tremulous fork</h1>

		<Nav items={[["/tremulous_fork/", "Home"]]}/>

		<Information>
			To get more details about contribution you could <Extern href="https://github.com/Buom01/tremulous/graphs/contributors">see forks tree on GitHub</Extern>
		</Information>

		<Basic Component={Generic} width="80%" height="initial" class={style.content}>

			<h2 class="title" id="tremulous-license">Tremulous license</h2>
			<p>
				Tremulous itself: <Link>https://github.com/darklegion/tremulous/blob/master/COPYING</Link><br/>
				GrangerHub: <Link>https://github.com/GrangerHub/tremulous/blob/master/COPYING</Link><br/>
				My fork: <Link>https://github.com/Buom01/tremulous/blob/master/COPYING</Link>
			</p>
			<h2 class="title" id="fonts-licenses">Fonts licenses</h2>
			<p>
				Fonts licenses are here: <Link>https://github.com/Buom01/tremulous/blob/master/COPYING</Link><br/>
				(Fonts of this website are the same)
			</p>
			<h2 class="title" id="logos">Logos</h2>
			<p>
				Some logos are the propriety of their owner. More information on the link encompassing them.
			</p>
			<h2 class="title" id="website-source-licenses">Website source-code licenses</h2>
			<p>
				None for now, even it it's open-sourced.
			</p>
		</Basic>

		<Footer/>

	</div>
);

export default Home;
