<script lang="ts">
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import { page } from '$app/state';
	let Products = page.data.products
</script>

<Breadcrumb class="mb-5">
	<BreadcrumbItem home>Home</BreadcrumbItem>
	<BreadcrumbItem >Products</BreadcrumbItem>
</Breadcrumb>
<div class="grid grid-cols-1 gap-4 xl:grid-cols-3">	

</div>
