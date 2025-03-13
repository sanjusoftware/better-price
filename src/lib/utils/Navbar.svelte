<script lang="ts">
	import { page } from '$app/state';
	import { humanize } from '$lib/utils/strings';
	import { SignOut } from '@auth/sveltekit/components';
	import {
		Avatar,
		Button,
		Dropdown,
		DropdownDivider,
		DropdownHeader,
		DropdownItem,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl
	} from 'flowbite-svelte';
	import {
		BellRingSolid,
		GridOutline
	} from 'flowbite-svelte-icons';
	let activeUrl = $derived(page.url.pathname);
	let user = page.data.session?.user;
</script>

<Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
	<NavBrand href="/products" class="flex items-center justify-between mr-4">
		<img src="/bp_logo.jpeg" class="me-3 h-6 sm:h-9" alt="DSK Logo" />
		<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
			Better Price
		</span>
	</NavBrand>
	<NavHamburger />
	{#if user}
		<NavUl {activeUrl}>			
			<NavLi class="cursor-pointer">
				<div class="flex items-center gap-2">
					<GridOutline size="md" />
					Products
				</div>
			</NavLi>						
		</NavUl>

		<div class="flex items-center md:order-2">
			<Button
				id="languages-list"
				color="none"
				class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
			>
				<span class="fi fi-us h-5 w-5 mt-0.5"></span>
			</Button>
			<Button
				id="notifications-list"
				color="none"
				class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
			>
				<BellRingSolid class="w-6 h-6" />
			</Button>
			<div class="mx-2"></div>
			<Avatar id="avatar-menu" src={user.image ?? undefined} href="#" class="w-8 h-8" />
		</div>
		<Dropdown placement="bottom" triggeredBy="#avatar-menu">
			<DropdownHeader>
				<span class="block text-sm">{humanize(user.name ?? 'Unknown')} - ({user.roles})</span>				
				<span class="block truncate text-sm font-medium">{user.email}</span>
			</DropdownHeader>
			<DropdownItem href="/dashboard">Dashboard</DropdownItem>
			<DropdownItem href="/settings">Settings</DropdownItem>
			<DropdownDivider />
			<DropdownItem>
				<SignOut options={{ redirect: true, redirectTo: "/signin" }}>
					<div slot="submitButton" class="buttonPrimary">Sign out</div>
				</SignOut>
			</DropdownItem>
		</Dropdown>
		<Dropdown placement="bottom" triggeredBy="#notifications-list">
			<DropdownHeader>
				<span class="block text-md">Notifications</span>
			</DropdownHeader>
			<DropdownItem>Notification 1</DropdownItem>
			<DropdownItem>Notification 2</DropdownItem>
			<DropdownItem>Notification 3</DropdownItem>
			<DropdownDivider />
			<DropdownItem class="text-center" href="/notifcations">View All</DropdownItem>
		</Dropdown>
		<Dropdown placement="bottom" triggeredBy="#languages-list">
			<DropdownItem>
				<a
					href="/"
					class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600"
					role="menuitem"
				>
					<div class="inline-flex items-center">
						<span class="fi fi-us h-3.5 w-3.5 mr-2"></span>
						English (US)
					</div>
				</a>
			</DropdownItem>
			<DropdownItem>
				<a
					href="/"
					class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600"
					role="menuitem"
				>
					<div class="inline-flex items-center">
						<span class="fi fi-bg h-3.5 w-3.5 mr-2"></span>
						Bulgarian
					</div>
				</a>
			</DropdownItem>
		</Dropdown>
	{/if}
</Navbar>
