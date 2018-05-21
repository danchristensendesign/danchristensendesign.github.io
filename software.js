
// item(group, img, str, row, col, rows, cols) 
// group(str, color, row, col, rows, cols, colDivs, rowDivs) 

var software = new group("software", 2,1,0,1,1,2,2);


var sensory = [
	["Automated reporting program for New Belguim Brewery.", PIC, 'rm graphic.jpg'],
	["I created a powerful, multi-featured program for New Belgium Brewery to track and mine their beer tasters' data. \n \n This program helped my clients in four major ways: \n \n \t 1. Time saving tools. \n \t 2. In-depth analyses. \n \t 3. Flexibility. \n \t 4. Data Integrity. \n \n The following pictures describe these features and benefits in greater detail. \n \n Here you can see the program's home screen.", PIC, 'rm home.jpg'],
	["1. Time saving tools. \n \n This program automates a substantial amount of data entry, manipulation, and reporting. \n \n Their quarterly panelist reports are a particularly great example of time savings. Generating quarterly reports for all of their beer tasters previously required 100 hours of overtime spent copying, pasting, and resetting of various filters for each taster. With my program, this once monumental task now takes minutes. \n \n This is the form used to create the reports. Each setting, filter, and option gives them added flexibility without any added time.", PIC, 'rm trimester.jpg'],
	["2. In-depth analyses. \n \n On top of automating existing reports, I designed several new reports that have helped my clients better understand their data and improve their training methods. \n \n This particular report compares performance between two different groups. Various filters narrow the analysis to any specific combination of tasters, dates, or locations to name a few. This helps them to compare any variable to another within their data.", PIC, 'rm filters.jpg'],
	["3. Flexibility. \n \n All of the reports and tools within the program are designed with flexibility in mind. This way, they can adjust any setting to fit their dynamic needs or requests. \n \n Additionally, I designed the program to work with their previous methods of storing data, so it includes a feature to import date-filtered ranges of data from specific sources. They can choose exactly which data to import at any given time, which keeps things flexible and running smoothly.", PIC, 'rm import.jpg'],
	["4. Data Integrity. \n \n Mis-spelled names and flavor attributes previously lead to erroneous and incomplete reports. Now, these are automatically corrected based on stored tables of previous mis-spellings. \n \n This particular taster has five stored mis-spellings. \n \n Additionally, I created tools to help find common errors in their data, such as duplicate entries, blank cells, or accidentally incrementing of dates within a set of data from a single day.", PIC, 'rm names.jpg'],
	
	
];

var snowboard = [
	['Snowboard designer for a video game. \n \n I created a JavaScript app to design custom snowboard shapes for a procedurally generated snowboarding game my brothers and I were collaborating on. The app outputs a text file containing a 3-D array of points defining the board. We can then easily import the text into the game code. \n \n The most interesting challenge for this project was coding my own cubic spline interpolator to facilitate the creation of interesting yet smooth board shapes from a small number of defined points. \n \n Writing it in JavaScript means it can easily run in most web browsers without any installation.', PIC, 'board graphic.jpg'],
	['https://danchristensendesign.github.io/boardDesigner/', LINK, 'Try it' ]
];

var wavtabler = [
	["Wave table maker for digital synth. \n \n I created this JavaScript app for my digital synthesizer (shown on the main page). \n \n This app lets you open an audio file and select a specific portion of it to copy as a wave table (an array that stores the samples for one full wave cycle). The selected portion of the original file is resampled for the selected table size and normalized. \n \n  The download button outputs a binary file of the wave table that I can load directly onto my synthesizer's microSD card. \n \n Note: this version works best with <15 second sound snippets.", PIC, 'wave graphic.jpg'],
	['https://danchristensendesign.github.io/waveTableMaker/', LINK, 'Try it' ]
];

var blockjumper = [
	["Minimalist web-based puzzle game created with JavaScript. \n \n I made this simple puzzle game with three goals in mind: \n \n 1. Learn basic web animation. \n 2. Learn how to implement sprite art. \n 3. Design a minimalist game that teaches players the game mechanics incrementally and naturally, without any explicit instructions or handholding. \n \n From this experience, I gained a new appreciation for the serious skills involved with level design in games.", PIC, 'block graphic.jpg'],
	['https://danchristensendesign.github.io/blocksGame/', LINK, 'Try it']
];



new item(software, sensory, "reporting program", 0,0, 1, 1);
new item(software, snowboard, 'board designer', 1, 0, 1, 1);
new item(software, wavtabler, "wave table maker", 0,1,1,1);
new item(software, blockjumper, "puzzle game", 1,1,1,1);
