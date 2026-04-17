const server = Bun.serve({
	port:6969,
	routes: {
		"/": () => new Response('Hi Bun!'),
	}
});

console.log("Hello Bun!"); // print data on terminal

console.log(`Listening on ${server.url}`);
