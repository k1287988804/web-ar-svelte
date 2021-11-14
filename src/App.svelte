<script lang="ts">
	import './common/components'
	import Mixin from './mixins/mixin.svelte'
	import { A, Aw } from "./utils/utils";
	import { onMount } from "svelte";

	onMount(async () => {
		await Aw()

	})
</script>

<a-scene
	vr-mode-ui="enabled: false"
	arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false;'>
	<Mixin />
	<!-- <a-image src="#sister" width="4000" height="2250"
		look-at="[gps-camera]"
		gps-entity-place="latitude: 9.950000; longitude: 10.000000;"></a-image> -->
	<a-image src="#sister" width="4000" height="2250"
		look-at="[gps-camera]"
		gps-entity-place="latitude: 10.020000; longitude: 10.000000;"></a-image>
	<a-camera
		rotation-reader
		gps-camera="simulateLatitude: 10.000000; simulateLongitude: 10.000000; minDistance: 0.00001; maxDistance: 10000;"
	>
	</a-camera>
</a-scene>