MarmoTabs
=========

Créer très simplement un système de tabulation en JavaScript.

![Logo](https://raw.githubusercontent.com/marmottes/marmotabs/master/image.jpg "logo")

Exemple simple
----

```html
<div id="tabs">
	
	<div role="tabs">

		<button>Example</button>
		<button>Bla</button>
		<button>Marmotte</button>

	</div>

	<div role="contents">
		
		<div>Tab "Example".</div>
		<div>Tab "Bla".</div>
		<div>Tab "Marmotte".</div>

	</div>

</div>

<script>marmotabs(document.getElementById("tabs"));</script>
```

![Exemple](https://raw.githubusercontent.com/marmottes/marmotabs/master/example.jpg "example")

License
----

[WTFPL](http://www.wtfpl.net/)