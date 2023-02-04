<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			<li aria-current={$page.url.pathname === '/patheditor' ? 'page' : undefined}>
				<a href="/patheditor">patheditor</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
		</a>
	</div>
</header>

<style>

</style>
