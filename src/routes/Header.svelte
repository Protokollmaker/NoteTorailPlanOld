<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			<li aria-current={$page.url.pathname === '/patheditor' ? 'page' : undefined}>
				<a href="/patheditor">Patheditor</a>
			</li>
			<li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
				<a href="/login">login</a>
			</li>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">logout</a>
			</li>
		</ul>
	</nav>
</header>

<style>
ul li {
    display:inline;
}

a {
	margin: 2px 2px 2px 10px;
}
</style>
