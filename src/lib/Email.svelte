<script>
	function getPlaceholder() {
		let placeholders = [
			'maupaytothemoon@gmail.com',
			'ty@arsenalfantv.biz',
            'lampz@everton.net'
		];
		let random = Math.floor(Math.random() * placeholders.length);
		let placeholder = placeholders[random];
		return placeholder;
	}
	let placeholder = getPlaceholder();
	
	/**
* @type {String}
*/
	let email;

	async function joinWaitlist(){
		const submission = await fetch('/waitlist',{
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify({email: email})}
		)
		const response = await submission.json()
		console.log("SERVER RESPONSE:", response)
	}

	
</script>

<form class="max-w-lg grid auto-cols-min items-stretch gap-x-2 gap-y-1"
on:submit|preventDefault={joinWaitlist}>
	<label class=" row-start-1 self-end font-medium" for="bd-email"
		>Join the waitlist</label
	>
	<input
		class="min-w-40 row-start-2 rounded p-2 text-gray-800"
		type="email"
		{placeholder}
		name="email"
		id="bd-email"
		bind:value={email}
	/>
    <button class="bg-yellow-400 rounded-lg font-medium row-start-2 justify-self-end py-2 px-2">Join</button>
	<!-- <button class="row-start-2 justify-self-end bg-yellow-400 rounded-lg py-1 px-2"> -->
	<!-- <a
		class="row-start-3 col-span-2 
text-sm text-slate-300"
		href="https://buttondown.email"
		target="_blank">Powered by Buttondown.</a
	> -->
    </form>
