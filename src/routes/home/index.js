import { h, Fragment } from 'preact';
import style from './style'

import { Section, Content, Media } from './section';

import { Extern, NonCritical, NoBreak } from '../../components/utils';
import { Nav, Footer } from '../../components/nav';
import { Generic, Alien, Human } from '../../components/block';
import { Basic, Simple, Normal } from '../../components/block/layouts';
import { Warning } from '../../components/message';
import { Progress } from '../../components/progress';
import Download from '../../components/download';


const Home = () => (
	<div class={style.page}>

		<h1 class="title">Buom_01's Tremulous fork</h1>

		<Nav items={["Benefits", "Downloads", "Future enhancements", "Current issues"]}/>

		<Warning>
			This website is prereleased. Meaning that informations provided here could be in a prototype state.<br/>
			Also the advertised fork is not ready nor necessarly stable.
		</Warning>

		<h2 class="title" id="benefits">Benefits</h2>

		<Section>

			<Media>
				<div class={style.font_preview + " shadow"}>
					<p class="bigfont">
						Big Font
					</p>
					<p class="alien">
						Alien Font
					</p>
					<p class="human">
						Human Font
					</p>
					<p class="chat">
						Chat Font
					</p>
					<p>
						Default Font
					</p>
					<p class="smallfont">
						Small Font
					</p>
				</div>
			</Media>

			<Content>
				<Simple Component={Generic} title="New fonts system" width="100%" height="100%" big>
					<ul>
						<li>With <strong>real shadow</strong></li>
						<li>With its <strong>real neon effect</strong></li>
						<li>Chat font, for better in-game readability</li>
						<li>Per team fonts, decoring UI</li>
						<li>All game counters are now using these per-team fonts</li>
					</ul>
				</Simple>
			</Content>

		</Section>

		<NonCritical>

			<Section>

				<Content>
					<Simple Component={Generic} title="Complete Gamepad support" width="100%" height="100%" big>
						<ul>
							<li>Control characters precisly</li>
							<li>Get <strong>game feedback</strong></li>
							<li><strong>Usable in UI</strong></li>
							<li>Finely <strong>configurable and bindable</strong></li>
						</ul>
					</Simple>
				</Content>

				<Media>
				</Media>

			</Section>

			<Section>

				<Media>
					<div class={style.ui_preview}>

						<div>
							<Alien vertical width="300px" height="300px" augmented="tl-round bl-round exe">
								<h1>Alien</h1>
								<div class="v-cell-expand">
									<Alien sub basic augmented="bl-round exe" class="v-cell-expand">
									</Alien>
								</div>
							</Alien>
							<Human vertical width="300px" height="300px" augmented="tr-clip br-clip exe">
								<h1>Human</h1>
								<div class="v-cell-expand">
									<Human sub basic augmented="br-clip exe" class="v-cell-expand">
									</Human>
								</div>
							</Human>
						</div>

					</div>
				</Media>

				<Content>
					<Simple Component={Generic} title="Redesigned UI" width="100%" height="100%" big>
						<p>Say goodbye to annoying square non-transparent black UI, say hello to fine-tunned custom UI.</p>
						<ul>
							<li><strong>Blurred background</strong> for readability</li>
							<li>Per <strong>team fonts</strong></li>
							<li><strong>Better inputs</strong> handling</li>
							<li>And many more</li>
						</ul>
					</Simple>
				</Content>

			</Section>

			<Section>

				<Content>
					<Simple Component={Human} title="Intelligent UI" width="100%" height="100%" big>
						<p>
							Is a <strong>critical object needed</strong> in your base ?<br/>
							Should you <strong>upgrade your class</strong> ?<br/>
							<strong>Intelligent UI will indicate it to you !</strong>
						</p>
						<p>
							That mean that it will <strong>also auto-sell old/conflicting equipment</strong>.
						</p>
					</Simple>
				</Content>

				<Media>
					<div class={style.ui_preview}>

						<Normal
								Component={Human} title="Class selection" width="600px" height="300px"
								list={
									<ul>
										<li><span augmented-ui="tl-clip bl-clip exe"><img src="assets/emoticons/attention.webp" alt="Attention required" class="emoticon"/> Attention</span></li>
										<li><span augmented-ui="tl-clip bl-clip exe"><img src="assets/emoticons/upgrade.webp" alt="Suggested upgrade" class="emoticon"/> Upgrade</span></li>
										<li class="disabled"><span augmented-ui="tl-clip bl-clip exe"><img src="assets/emoticons/locked.webp" alt="Item is locked" class="emoticon"/> Locked</span></li>
									</ul>
								}
							>
						</Normal>

					</div>
				</Media>

			</Section>

			<Section>

				<Media>
					<video width="256" height="256" autoplay loop muted playsinline>
					  <source src="assets/creep.webm" type="video/webm"/>
						Your browser (or OS) <s>is a deep shit which</s> does't support WEBM libre media format. Sorry.
					</video>
				</Media>

				<Content>
					<Simple Component={Alien} title="Animated Creep-tag" width="100%" height="100%" big>
						<p>
							New HD creep-tag texture, with 550 frames of creepy animation.<br/>
							<Extern href="https://youtu.be/u65gsvazk2U" title="Tremulous creep tag">See it in action</Extern><br/>
						<p>
						</p>
							For (initial loading) performances, only half of frames are used by default.
						</p>
					</Simple>
				</Content>

			</Section>

			<Section>

				<Content>
					<Simple Component={Alien} title="Smoothed models" width="100%" height="100%" big>
						<p>
							Double vertex were merged and <strong>aliens models were finely smoothed</strong>.<br/>
							Moreover <strong>most shaders were enhanced</strong> as Korx and many mods did.<br/>
						</p>
						<p>
							Then back of Granger and Dretch don't look with a discontinuity anymore.<br/>
							Also the Overmind got a growing animation !
						</p>
					</Simple>
				</Content>

				<Media>
					<img src="assets/md3000.webp" alt="Overmind smoothed model" height="420"/>
				</Media>

			</Section>

			<Section>

				<Media>
					<div class={style.ui_preview}>

						<Normal	Component={Alien} title="Class selection" width="600px" height="300px">
							<div class={style.ui_class_preview}>
								<img src="assets/emoticons/dragoon.webp" alt="Class Dragon"/>
							</div>
						</Normal>

					</div>
				</Media>

				<Content>
					<Simple Component={Generic} title="UI's selection Preview" width="100%" height="100%" big>
						<p>
							Get visual <strong>preview feedback</strong> to recognize quickly <strong>your selection</strong>.
						</p>
						<p>
							At the same price you can also discover locked items which are now always displayed !<br/>
							The aim is to faciliate game discovery for newbies.
						</p>
					</Simple>
				</Content>

			</Section>

			<Section>

				<Content>
					<Simple Component={Generic} title="Integrated Team-Status" width="100%" height="100%" big>
						<p>
							Team-Status is <strong>well present on custom servers</strong> and is well appreciated.<br/>
							So I decided to make it <strong>integrated in the UI</strong> !<br/>
							Note that it's not the same system than most popular servers.
						</p>
					</Simple>
				</Content>

				<Media>
					<div class={style.ui_preview}>

						<div>
							<Alien vertical width="400px" augmented="tl-round bl-round exe">
								<h1>Alien</h1>
								<div class="v-cell-expand">
									<Alien sub basic augmented="bl-round exe" class={"v-cell-expand right "+style.status}>
										<img src="assets/emoticons/overmind.webp" alt="Overmind buildable" class="emoticon"/> (<span class="green">750/750</span>)<br/>
										<img src="assets/emoticons/egg.webp" alt="Egg buildable" class="emoticon"/> (<span class="green">2</span>)<br/>
										<img src="assets/emoticons/granger.webp" alt="Granger class" class="emoticon"/> (<span class="grey">0</span>)<br/>
										<br/>
										<img src="assets/emoticons/booster.webp" alt="Booster buildable" class="emoticon"/> (<span class="grey">0</span>)<br/>
									</Alien>
								</div>
							</Alien>
							<Human vertical width="400px" augmented="tr-clip br-clip exe">
								<h1>Human</h1>
								<div class="v-cell-expand">
									<Human sub basic augmented="br-clip exe" class={"v-cell-expand "+style.status}>
										(<span class="green">930/930</span>) <img src="assets/emoticons/reactor.webp" alt="Reactor buildable" class="emoticon"/><br/>
										(<span class="green">2</span>) <img src="assets/emoticons/telenode.webp" alt="Telenode buildable" class="emoticon"/><br/>
										(<span class="grey">0</span>) <img src="assets/emoticons/ckit.webp" alt="Construction kit weapon" class="emoticon emoticon_large"/><br/>
										(<span class="red">0</span>) <img src="assets/emoticons/armoury.webp" alt="Armoury buildable" class="emoticon"/><br/>
										(<span class="green">1</span>) <img src="assets/emoticons/medstat.webp" alt="Medical station buildable" class="emoticon"/><br/>
										(<span class="grey">0</span>) <img src="assets/emoticons/defcomp.webp" alt="Defense computer buildable" class="emoticon"/>
									</Human>
								</div>
							</Human>
						</div>

					</div>
				</Media>

			</Section>

			<Section>

				<Media>
				</Media>

				<Content>
					<Simple Component={Generic} title="Better alien's radar" width="100%" height="100%" big>
						<p>
							Alien's radar now also detect teammate and team object.<br/>
							Also dots showing then are fadded when they go away.
						</p>
					</Simple>
				</Content>

			</Section>

			<Section>

				<Content>
					<Simple Component={Generic} title="Overall downloads" width="100%" height="100%" big>
						<p>
							Nowdays downloads are fast enough.<br/>
							But knowing files counts sound to be a trivial feature.<br/>
							So I added an overall downloading progress bar with it counter <NoBreak>(x-th / total)</NoBreak>.
						</p>
						<p>
							Moreover, progress bar were redesigned.
						</p>
					</Simple>
				</Content>

				<Media>
					<div style="width:90%">
						<Progress progress={65}>(1/2)</Progress><br/>
						<Progress progress={30}/>
					</div>
				</Media>

			</Section>

			<Section>

				<Media>
					<Extern href="https://forum.grangerhub.com/"><img src="assets/grangerhub.webp" alt="GrangerHub logo"/></Extern>
				</Media>

				<Content>
					<Simple Component={Generic} title="Syncted from GrangerHub" width="100%" height="100%" big>
						<p>
							My fork is based on <Extern href="https://github.com/GrangerHub/tremulous/">GrangerHub's Tremulous fork</Extern>, and <Extern href="https://github.com/GrangerHub/tremulous/pulls/Buom01" title="Buom_01's pull requests on GrangerHub's Tremulous fork">I send back some pull requests</Extern> periodically.
						</p>
					</Simple>
				</Content>

			</Section>

			<h2 class="title" id="downloads">Downloads</h2>

			<Section>
				<Download/>
			</Section>

			<h2 class="title" id="future-enhancements">Future enhancements</h2>

			<Section>

				<Content>
					<Simple Component={Generic} title="A Launcher" width="100%" height="100%" big>
						<p>
							A Launcher allowing which client to use is the next preoccupation.<br/>
							I would to make it compatible with <Extern href="https://github.com/GrangerHub/Stellar-Prey">GrangerHub's STELLAR PREY™ game</Extern> as <Extern href="https://tremulous.net/">Tremulous 1.1.0</Extern>, conflict free while I want to keep map shared across forks.<br/>
							<br/>
							It would be an independant project.
						</p>
					</Simple>
				</Content>

				<Media>
					<img src="assets/os/launcher.svg" alt="Buom_01's launcher" style="width:40%"/>
				</Media>

			</Section>

			<Section>

				<Media>
					<p>
						CTRL + 1 &rarr; Dretch / Rifle<br/>
						...
					</p>
				</Media>

				<Content>
					<Simple Component={Generic} title="Better binds" width="100%" height="100%" big>
						<p>
							Actually I just added the possibility to got up to 3 keys for a bind, mainly for the Gamepad.<br/>
							But I want to allow composed bind <NoBreak>(e.g. CTRL+1)</NoBreak> with per-team bind allowing to evolve from binds combinaisons properly.
							There will probably be a new file format for it with a complete UI.
						</p>
					</Simple>
				</Content>

			</Section>

			<Section>

				<Content>
					<Simple Component={Generic} title="LED feedback" width="100%" height="100%" big>
						<p>
							What if your keyboard change it color according to the gamestate ?<br/>
							Currently there are only basic Gamepad feedback.<br/>
							<br/>
							Awaiting for a mature library: <Extern href="https://gitlab.com/CalcProgrammer1/OpenRGB">OpenRGB</Extern> doesn't have predefined effects and is still buggy with my keyboard.
						</p>
					</Simple>
				</Content>

				<Media>
					<Extern href="https://gitlab.com/CalcProgrammer1/OpenRGB"><img src="assets/openrgb.png" alt="OpenRGB logo"/></Extern>
				</Media>

			</Section>

			<Section>

				<Media>
					<Extern href="https://www.khronos.org/vulkan/"><img src="assets/vulkan2.svg" alt="Vulkan logo" width="300"/></Extern>
				</Media>

				<Content>
					<Simple Component={Generic} title="Vulkan renderer" width="100%" height="100%" big>
						<p>
							<Extern href="https://kennyalive.com/post/quake3-vulkanized/">Some great work</Extern> were already began, and <Extern href="https://github.com/GrangerHub/tremulous/commit/vulkan">some implantation into Tremulous</Extern> were already too.
						</p>
						<p>
							I could probably help it developement, but currently it's not necessarly the highest priority.<br/>
							As some UI code need refactor and new GFX, I think that I will wait for Vulkan implantation.
						</p>
					</Simple>
				</Content>

			</Section>

			<Section>

				<Content>
					<Simple Component={Generic} title="OpenWolf engine" width="100%" height="100%" big>
						<p>
							<Extern href="https://www.moddb.com/games/openwolf">OpenWolf engine</Extern> have a lot of enhancements.<br/>
							The aim is to import most major enhancements into Tremulous to get best of both worlds, but not its OpenGL 3 engine since Vulkan engine should be used instead.
							<br/>
							<br/>
							<Extern href="https://github.com/GrangerHub/Stellar-Prey">Stella Prey</Extern> is based on it.
						</p>
					</Simple>
				</Content>

				<Media>
					<div class={style.media_container}>
						<iframe
								title="OpenWolf Engine Demonstration"
								src="https://www.youtube.com/embed/Hx-QIzjawRM"
								frameborder="0"
								allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							/>
					</div>
				</Media>

			</Section>

			<Section>

				<Media>

				</Media>

				<Content>
					<Simple Component={Generic} title="Support new Medias" width="100%" height="100%" big>
						<p>
							Allowing a proper video format and allow streaming could offer new modding possibility.<br/>
							Also, 3D models are in a really old and too basic format. I currently just tweaked it to make it acceptable; I aim to remake really similar model (rigged and with complete texture) while keeping the nature of the game.<br/>
							<br/>
							Since OpenWolf engine already offer new possibility the idea is mainly to provide most popular models format like glTF 2.0
						</p>
					</Simple>
				</Content>

			</Section>

			<Section>

				<Content>
					<Simple Component={Generic} title="Real roots and on models stains" width="100%" height="100%" big>
						<p>
							This objective seem the most complicated: getting creep tag branch independancy.<br/>
							With it I also want to got blood stains and trapper stains on players (and buildable models). It sound complicated to manage mark's tearing.
						</p>
					</Simple>
				</Content>

				<Media>

				</Media>

			</Section>

			<h2 class="title" id="current-issues">Current issues</h2>

			<Section>

				<Content>
					<Simple Component={Generic} title="Very old UI engine" width="100%" height="100%" big>
						<p>
							UI's engine is really old. Sometimes some elements don't show right on small screens.<br/>
							Also custom corner are inspired from Korx's code. I want to redo corners with Vulkan functions.
						</p>
					</Simple>
				</Content>

				<Media>

				</Media>

			</Section>

			<Section>

				<Media>

				</Media>

				<Content>
					<Simple Component={Generic} title="Old servers VM" width="100%" height="100%" big>
						<p>
							Some enhancements are also dependant of the gamemod VM: If you play on an unpatched server, some things like Gamepad or animate creep tag will not work properly.<br/>
							As I send back my modifications to GrangerHub: it's to servers owner to keep their code updated*.<br/>
							<i>* According to me</i>
						</p>
					</Simple>
				</Content>

			</Section>

			<Section>

				<Content>
					<Simple Component={Generic} title="Particles" width="100%" height="100%" big>
						<p>
							Tremulous engine is a fork of Quake III.<br/>
							I think that particles engine where never reviewed. Also there are a small limit of particles that need to be enlarged properly.<br/>
							Particles performances should also be verified; they should be managed by the GPU.
						</p>
					</Simple>
				</Content>

				<Media>

				</Media>

			</Section>

			<Footer/>

		</NonCritical>

	</div>
);

export default Home;
