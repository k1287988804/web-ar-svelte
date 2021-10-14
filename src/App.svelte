<script lang="ts">
	import './common/components'
	import Mixin from './mixins/mixin.svelte'
	import { A, Aw } from "./utils/utils";
	import { onMount } from "svelte";

	onMount(async () => {
		await Aw()
		// const box_entity = A('a-entity')
		// console.log(box_entity.getAttribute('position'))
		// box_entity.setAttribute('material', 'color', 'crimson')
	})
</script>

<a-scene>
	<Mixin />
	<a-entity camera look-controls wasd-controls position="0 3 0"></a-entity>
	<a-entity geometry="primitive: cylinder; openEnded: true" material="side: double"></a-entity>
	<a-entity mixin="red cube pos"></a-entity>
	<!-- <a-entity camera look-controls>
		<a-entity   cursor="fuse: true; fuseTimeout: 500"
					position="0 0 -1"
					geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
					material="color: black; shader: flat">
		</a-entity>
	</a-entity>
	
	<a-entity id="box" position="-3 -2 -3" cursor-listener geometry="primitive: box" material="color: blue"></a-entity>	   -->

	<a-entity rotation="0 0 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000">
        <a-sphere position="5 0 0" color="mediumseagreen"></a-sphere>
	</a-entity>
	<a-box position="-1 1.6 -5" animation="property: position; to: 1 8 -10; dur: 2000; easing: linear; loop: true" color="tomato"></a-box>
	<!-- <a-entity position="1 1 -2" geometry="primitive: box" material="color: red"
			  data-position="2 2 2"
			  animation="property: rotation; to: 0 360 0; startEvents: rotate"	
	></a-entity> -->
</a-scene>