<script>
	import { onMount } from 'svelte';
	
	export let dbPath;

	let textarea;
	
	onMount(() => {
		textarea.select();
		document.execCommand('copy');
	});
</script>

<textarea bind:value={dbPath} bind:this={textarea}></textarea>