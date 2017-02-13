<style>
	h1 { font-family: 'Roboto Slab'; font-size: 1.5em; color: #4a5456; margin: 0; }
	p { font-family: 'Open Sans'; color: #4a5456; margin: 0; }
	p:last-of-type { margin-bottom: 20px; }
	p.fine { font-size: 12px; margin-bottom: 20px; }
</style>
<h1>Number of teams: {{teams.length}}</h1>
<p class="fine">(Redux store with props)</p>
{{#each teams as team}}
	<p>{{team.name}}</p>
{{/each}}
