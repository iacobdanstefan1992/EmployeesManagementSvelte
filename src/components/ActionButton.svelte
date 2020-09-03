<a href="#" class="action-button" on:click>
	<span>
		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAATklEQVRIiWNgGAVUBkcZGBgO09KC/1BMNGCikUNGLRjJFhxlQCRFbBgG8KlBySfoFvyjgqNJyifYNI9mtFEL6GwBC4nqjzBQmM5HAQYAAEhLGN/HFZxZAAAAAElFTkSuQmCC"/>
	</span>
</a>

<style>
	.action-button {
		display: block;
		background-color: #c0242e;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		position: fixed;
		right: 1.5em;
		bottom: 1.5em;
		box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
		color: white;
		text-decoration: none;
		text-align: center;	
		transition-property: background-color;
		-webkit-transition-duration: 0.5s;
		-moz-transition-duration: 0.5s;
		-o-transition-duration: 0.5s;
		-ms-transition-duration: 0.5s;
		transition-duration: 0.5s;
		transition-timing-function: linear;	
	}
	/*
		Vendor prefixes
		-webkit- 		Chrome, Safari, versiunile mai noi de Opera
		-moz- 			Firefox
		-o- 			versiunile mai vechi de Opera
		-ms- 			IE, MS Edge
	*/
	.action-button:hover {
		background-color: #E0444E;
	}
	
	.action-button:active {
		transform: scale(1.05);
		/* transform: translateY(3px); */
	}
	.action-button span {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 2em;
		transform: translate(-50%, -50%);
	}
	.action-button span img {
		filter: invert(1);
	}
</style>