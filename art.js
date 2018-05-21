
// item(group, img, str, row, col, rows, cols) 
// group(str, color, row, col, rows, cols, colDivs, rowDivs) 


var art = new group("artwork", 4,1,1,1,1,2,2);

var arrange = [
	["Arrangements. \n \n I studied Music Composition for three years and play several instruments. \n \n Right now, I am most excited about making music with my new synthesizer when it's finished.", PIC, 'arrange graphic.jpg'],
	['As a member of a string quartet, I made several arrangements for our group, ranging from The Beatles to Radiohead to Vanessa Carlton. We would street perform these pieces in downtown Denver.', PIC, 'miles.jpg'],
	["I arranged the main theme from Home Alone for my sister and I to play at a family Christmas party. \n \n \n KEVIN!", PIC, 'home alone.jpg']
];

var instruments = [
	["Other than my synthesizer, I've built a guitar, harp, and ukulele. I love that creating instruments requires equal parts mathematics, craftsmanship, and an eye for aesthetics.", PIC, 'instruments graphic.jpg'],
	["Small harp. \n \n This was a fun project. I enjoyed calculating and mapping out the string lengths for each note and seeing them come together to naturally form the harp neck's curvature.", PIC, 'dan harp.jpg'],
	['Ukulele shaped like a cello. \n \n Rather than bending the sides with steam, I hollowed out a solid piece of wood for the body.', PIC, 'ukulele.jpg']
];

var drawings = [
	['Drawings.', PIC, 'art graphic.jpg'],
	['Segmented ship. Chalk pastel.', PIC, 'ship2.jpg'],
	['This poor astronaut lost his horse. Chalk pastel.', PIC, 'naked moon.jpg'],
	['Hungry shark. Chalk pastel.', PIC, 'shark.jpg']

];

var city = [
	['Web app simulation of an endless cityscape. \n \n This was a fun way to play with randomized generation of colors and shape, as well as animation layering in a web browser.', PIC, 'city graphic.jpg'],
	['https://danchristensendesign.github.io/cityScape/', LINK, 'Try it'],
];



new item(art, arrange, "arrangements", 0,0, 1, 1);
new item(art, instruments, "instruments", 1,0,1,1);
new item(art, drawings, "drawings", 0,1,1,1); 
new item(art, city, "skyline simulator", 1,1,1,1);