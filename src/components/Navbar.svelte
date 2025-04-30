<script>
	let isOpen = false;
</script>
<nav class="border-b border-[#E5E7EB] bg-white dark:border-[#333] dark:bg-[#121212] fixed w-screen z-50">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="text-2xl font-bold text-[#F63366]">ProductLogo</a>
			</div>

			<!-- Desktop Nav Links -->
			<div class="hidden items-center space-x-6 text-[#31333F] md:flex dark:text-white">
				<a href="/" class="transition-colors hover:text-[#F63366]">Home</a>
				<a href="/about" class="transition-colors hover:text-[#F63366]">About</a>
				<a href="/products" class="transition-colors hover:text-[#F63366]">Products</a>
				<a href="/contact" class="transition-colors hover:text-[#F63366]">Contact</a>
			</div>

			<!-- Desktop Buttons -->
			<div class="hidden items-center space-x-4 md:flex">
				<a
					href="/login"
					class="rounded border border-[#F63366] px-4 py-2 text-sm font-medium text-[#F63366] transition hover:bg-[#F63366] hover:text-white"
					>Login</a
				>
				<a
					href="/signup"
					class="rounded bg-[#F63366] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#d42e5b]"
					>Sign Up</a
				>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					class="text-[#31333F] focus:outline-none dark:text-white"
					on:click={() => (isOpen = !isOpen)}
				>
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						{#if !isOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Dropdown Menu -->
	{#if isOpen}
		<div class="space-y-4 px-4 pt-4 pb-6 text-[#31333F] md:hidden dark:text-white">
			<a href="/" class="block hover:text-[#F63366]">Home</a>
			<a href="/about" class="block hover:text-[#F63366]">About</a>
			<a href="/products" class="block hover:text-[#F63366]">Products</a>
			<a href="/contact" class="block hover:text-[#F63366]">Contact</a>
			<a
				href="/login"
				class="block rounded border border-[#F63366] px-4 py-2 text-center text-[#F63366] hover:bg-[#F63366] hover:text-white"
				>Login</a
			>
			<a
				href="/signup"
				class="block rounded bg-[#F63366] px-4 py-2 text-center text-white hover:bg-[#d42e5b]"
				>Sign Up</a
			>
		</div>
	{/if}
</nav>