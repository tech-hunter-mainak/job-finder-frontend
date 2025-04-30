<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Navbar from '../components/Navbar.svelte';
	let visitors = 0;
	let reviews = 0;
	let visible = false;
	
	let show = false;
  
	onMount(() => {
	  setTimeout(() => (show = true), 100);
	});

	let email = '';
	const subscribe = () => {
		// You can add form submission logic here
		alert(`Subscribed with ${email}`);
	};

	onMount(() => {
		visible = true;
		const visitorInterval = setInterval(() => {
			if (visitors < 1200) visitors += Math.floor(Math.random() * 10);
		}, 100);
		const reviewInterval = setInterval(() => {
			if (reviews < 300) reviews += Math.floor(Math.random() * 5);
		}, 120);

		return () => {
			clearInterval(visitorInterval);
			clearInterval(reviewInterval);
		};
	});

</script>

<!-- Hero Section -->
  
  <section class="relative w-full py-20 px-6 bg-white dark:bg-[#121212] overflow-hidden">
	<!-- Mild grid background using CSS gradients -->
	<div class="absolute inset-0 bg-white dark:bg-[#121212] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none z-0"></div>
  
	<div class="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 z-10">
	  <!-- Text Content -->
	  <div class={`transition-all duration-700 transform ${show ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
		<h1 class="text-4xl font-bold text-[#F63366] mb-4">Welcome to Our Product</h1>
		<p class="text-[#31333F] dark:text-white mb-6 max-w-md">
		  Discover innovative solutions designed to elevate your experience. Modern, fast, and made just for you.
		</p>
		<button class="px-6 py-2 bg-[#F63366] text-white rounded hover:bg-[#d42e5b] transition">
		  See More
		</button>
	  </div>
  
	  <!-- Image -->
	  <div class={`transition-all duration-700 transform ${show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex justify-center`}>
		<img src="/favicon.png" alt="Product" class="w-full max-w-md" />
	  </div>
	</div>
  </section>
  

<!-- About Section -->
<section id="about" class="bg-white px-8 py-16 text-[#31333F] dark:bg-[#1E1E1E] dark:text-white">
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="mb-4 text-3xl font-semibold">About Us</h2>
		<p class="text-[#6C757D] dark:text-[#A0A0A0]">
			Our product is built to empower your business with state-of-the-art technology and
			user-friendly solutions tailored to your needs.
		</p>
	</div>
</section>

<!-- Features Section -->
<section
	id="features"
	class="bg-[#F0F2F6] px-8 py-16 text-[#31333F] dark:bg-[#121212] dark:text-white"
>
	<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
		<div class="rounded bg-white p-6 shadow hover:shadow-lg dark:bg-[#1E1E1E]">
			<h3 class="mb-2 text-xl font-semibold">Feature One</h3>
			<p class="text-[#6C757D] dark:text-[#A0A0A0]">
				Detailed and powerful functionality for everyday use.
			</p>
		</div>
		<div class="rounded bg-white p-6 shadow hover:shadow-lg dark:bg-[#1E1E1E]">
			<h3 class="mb-2 text-xl font-semibold">Feature Two</h3>
			<p class="text-[#6C757D] dark:text-[#A0A0A0]">
				Reliable, scalable, and built with modern technologies.
			</p>
		</div>
		<div class="rounded bg-white p-6 shadow hover:shadow-lg dark:bg-[#1E1E1E]">
			<h3 class="mb-2 text-xl font-semibold">Feature Three</h3>
			<p class="text-[#6C757D] dark:text-[#A0A0A0]">
				User-centered design with clean and intuitive UI.
			</p>
		</div>
	</div>
</section>

<!-- Dynamic Counters -->
<section class="bg-white py-16 text-center text-[#31333F] dark:bg-[#1E1E1E] dark:text-white">
	<div class="flex justify-center gap-16">
		<div>
			<h3 class="text-4xl font-bold">{visitors}</h3>
			<p class="text-[#6C757D] dark:text-[#A0A0A0]">Visitors</p>
		</div>
		<div>
			<h3 class="text-4xl font-bold">{reviews}</h3>
			<p class="text-[#6C757D] dark:text-[#A0A0A0]">Reviews</p>
		</div>
	</div>
</section>

<!-- Middle Search Bar -->
<section class="bg-[#F0F2F6] py-10 text-center dark:bg-[#121212]">
	<input
		type="text"
		placeholder="Search features or FAQs..."
		class="w-full max-w-lg rounded-full border border-[#ddd] bg-white px-6 py-3 text-[#31333F] placeholder-[#6C757D] focus:ring-2 focus:ring-[#F63366] focus:outline-none dark:bg-[#1E1E1E] dark:text-white dark:placeholder-[#A0A0A0]"
	/>
</section>

<!-- Footer -->
<footer class="bg-[#F0F2F6] px-6 pt-12 pb-6 text-[#31333F] dark:bg-[#121212] dark:text-white">
	<div class="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
		<!-- Logo Column -->
		<div>
			<h2 class="text-2xl font-bold text-[#F63366]">ProductLogo</h2>
			<p class="mt-2 text-sm text-[#6C757D] dark:text-[#A0A0A0]">
				Building better experiences, every day.
			</p>
		</div>

		<!-- Useful Links Column -->
		<div>
			<h3 class="mb-3 text-lg font-semibold">Useful Links</h3>
			<ul class="space-y-2 text-sm">
				<li><a href="/" class="transition-colors hover:text-[#F63366]">Home</a></li>
				<li><a href="/about" class="transition-colors hover:text-[#F63366]">About Us</a></li>
				<li><a href="/products" class="transition-colors hover:text-[#F63366]">Products</a></li>
				<li><a href="/contact" class="transition-colors hover:text-[#F63366]">Contact</a></li>
			</ul>
		</div>

		<!-- Newsletter Column -->
		<div>
			<h3 class="mb-3 text-lg font-semibold">Get Updates</h3>
			<p class="mb-4 text-sm text-[#6C757D] dark:text-[#A0A0A0]">
				Subscribe to our newsletter to stay updated.
			</p>
			<form
				class="flex flex-col items-center gap-3 sm:flex-row"
				on:submit|preventDefault={subscribe}
			>
				<input
					type="email"
					bind:value={email}
					required
					placeholder="Enter your email"
					class="flex-1 rounded border border-gray-300 bg-white px-4 py-2 text-[#31333F] dark:border-gray-600 dark:bg-[#1E1E1E] dark:text-white"
				/>
				<button
					type="submit"
					class="rounded bg-[#F63366] px-4 py-2 text-white transition hover:bg-[#d42e5b]"
				>
					Subscribe
				</button>
			</form>
		</div>
	</div>

	<!-- Social Media Links -->
	<div class="mx-auto mt-6 flex max-w-7xl flex-wrap justify-center gap-4 md:justify-start">
		<a href="#" class="rounded-full bg-[#F63366] p-2 text-white transition hover:bg-[#d42e5b]">
			<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.36 8.6 8.6 0 0 1-2.72 1.04 4.3 4.3 0 0 0-7.33 3.91A12.2 12.2 0 0 1 3.16 4.7a4.3 4.3 0 0 0 1.33 5.74 4.27 4.27 0 0 1-1.94-.54v.05a4.3 4.3 0 0 0 3.45 4.2 4.29 4.29 0 0 1-1.93.07 4.3 4.3 0 0 0 4.01 2.97A8.63 8.63 0 0 1 2 19.54a12.18 12.18 0 0 0 6.59 1.93c7.91 0 12.24-6.55 12.24-12.23 0-.19-.01-.38-.02-.57A8.72 8.72 0 0 0 24 5.09a8.56 8.56 0 0 1-2.54.7z"
				/>
			</svg>
		</a>
		<a href="#" class="rounded-full bg-[#F63366] p-2 text-white transition hover:bg-[#d42e5b]">
			<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1.04 0-1.9-.86-1.9-1.9s.86-1.9 1.9-1.9 1.9.86 1.9 1.9-.86 1.9-1.9 1.9zm13.5 10.3h-3v-4.5c0-1.08-.92-2-2-2s-2 .92-2 2v4.5h-3v-9h3v1.5c.67-1 1.91-1.5 3-1.5 2.21 0 4 1.79 4 4v5z"
				/>
			</svg>
		</a>
		<!-- Add more socials as needed -->
	</div>

	<!-- Bottom Copyright -->
	<div
		class="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-[#6C757D] dark:border-gray-700 dark:text-[#A0A0A0]"
	>
		© {new Date().getFullYear()} ProductLogo. All rights reserved.
	</div>
</footer>

<style>
	:global(html) {
		color-scheme: light dark;
	}
	:global(body) {
		background-color: #ffffff;
		font-family: system-ui, sans-serif;
	}
</style>
