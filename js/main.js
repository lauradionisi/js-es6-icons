$(document).ready(function() {
	const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja', 
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


	const colors = [
		"blue",
		"orange",
		"purple"
	];

	//inserimento colori
	const coloredArray = colorIcons(icons, colors);
	console.log(coloredArray);
	const container = $('.icons');

	//inserimento icone nel container
	print(coloredArray, container);

	const select = $('#type');
	const type = getType(coloredArray);
	console.log(type);

	//aggiunta option al select
	printOptions(type, select);

	//bind fra evento e change

	select.change({container}, function (event) {
		const container = event.data.container;
		const optionSelected = $(this).val();

		const filtered = coloredArray.filter((item) => {
			return item.type === optionSelected;
		});

		if (filtered.length > 0) {
			print(filtered, container);
		}
		else {
			print(coloredArray, container);
		}

	});
});

// Functions

function print(array, container) {
	container.html('');

	array.forEach((item) => {
		const {color, family, name, prefix} = item;
		const elementHTML = `
		<div class= icon_container>
			<i class= "${family} ${prefix}${name}" style="color: ${color}"></i>
			<div class="title" style="color: ${color}">${name.toUpperCase()}</div>
		</div>
		`;

		container.append(elementHTML);
	});
}

function colorIcons(icons, colors) {
	const types = getType(icons);

	const coloredArray = icons.map((item) => {
		const indexType = types.indexOf(item.type);
		if (indexType !== -1) {
			item.color = colors[indexType];
		}
		return item;
	});
	return coloredArray;


	
}

function getType(array) {
	const types = [];

	array.forEach((item) => {
		if (!types.includes(item.type)) {
			types.push(item.type);
		}
	});

	return types;
}

function printOptions(array, select) {
	array.forEach((item) => {
		select.append(`<option value="${item}">${item}</option>`);
	})
}