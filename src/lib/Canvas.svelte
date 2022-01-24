<script>
	import { onMount } from 'svelte';
	import { studentCard } from '$lib/stores/students.js';
	let canvas;

	onMount(() => {
		// load student content from csv


		// set up canvas
		const ctx = canvas.getContext('2d');
		let frame = requestAnimationFrame(loop);
		function loop(t) {
			frame = requestAnimationFrame(loop);
			if ($studentCard) {
				const img = new Image();
				img.src = $studentCard.image;
				img.onload = () => {
					ctx.drawImage(img, 0, 0);
				};
				ctx.font="70px Times Roman";
				ctx.fillText($studentCard.name,100,100);
			}
		}

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<canvas
	class="canvas"
    bind:this={canvas}
	width={1600}
	height={900}
></canvas>
<div></div>
<style>
.canvas {
    background-color: blue;
	width: 100vw;
	height: 100vh;
}
</style>