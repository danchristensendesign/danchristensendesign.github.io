

// item(group, img, str, row, col, rows, cols) 
// group(str, color, row, col, rows, cols, colDivs, rowDivs) 

var hardware = new group("hardware", 1,0,0,1,1,2,2);



var Retropie = [
	["Nintendo-inspired Retropie console.", PIC, 'pi graphic.jpg'],
	["This is a Retropie gaming system I created. Retropie is an open-source platform used to install older video game emulators on a Raspberry Pi. Inspiration for the housing was drawn from the original Nintendo aesthetic. \n \n This project involved two main challenges: \n \n 1. Familiarizing myself with Linux, RaspberryPi, and Retropie. While the initial install was straightforward, I still needed to dig into adding functionality for a power switch, status light, and a cooling fan. \n \n 2. Routing out the inside of the wooden housing without a CNC router. I worked around this by using a wood milling bit on my drill press and setting up fences as hard stops for my routing area.", PIC, 'pi color.jpg'],
	['Front view. That small USB drive to the right of the controller cords holds nearly 6000 classic video games, including my personal favorite, Super Metroid on Super Nintendo.', PIC, 'pi front.jpg'],
	['Here is the system hooked up to a TV.', PIC, 'pi tv.jpg']
];

var synth = [
	["Digital wave-table synthesizer prototype.", PIC, 'synth graphic2.jpg'],
	["A prototype of my digital synthesizer. Its brain is the Axoloti Core microcontroller. \n \n This is my most recent and one of my most involved projects. It's a wave-table synth, which means the sound from each oscillator is generated from a table that holds one full cycle of any type of a wave. This method is ideal for running on a microcontroller because: 1. It requires a relatively small amount of processing power, and 2. It allows for a large variety of sounds because the table can be filled with samples from any type of wave. \n \n The two rows of buttons toggle between sixteen different screens for editing the various synth parameters (wave table, filter, arpeggiator, pitch envelope, etc.). The two columns of knobs control settings within the selected screen.", PIC, 'synth front.jpg'],
	["The housing for this prototype allows me to easily take it apart to access wiring. I'm also able to tilt it in either direction for optimal visibility while it's still in the design phase. \n \n The synth has two eight-voice polyphonic oscillators (which means they can each play eight notes at a time), as wells as four monophonic oscillators (which can only play one note at a time). Every oscillator has its own filter and arpeggiator, as well as three separate envelopes (for amplitude, pitch, and filter cutoff/resonance). \n \n It has two midi inputs for connecting keyboards or other midi controllers, and a microSD card for saving and loading customized patches and wave tables.", PIC, 'synth cool.jpg'],
	["This project has forced me to learn and grow in multiple areas: \n \n 1. Coding for microcontrollers. The board I'm using is the Axoloti Core board, which is based on an ARM chip, and runs code written in C. Working with this board has taught me to write efficient code, because everything needs to happen in real time and the processor has very real processing limits. \n \n 2. Using multiplexers to monitor more inputs than my board has pins for. Eight push button rotary encoders that have three signals each (two for turning, one for the button), as well as eight more buttons, totaling 32 inputs overall. I use multiple 8:1 multiplexers to check all of these using only four input pins. \n \n 3. Learning to work with LCD displays. Because the Axoloti Core has no built-in support for an LCD display, I wrote my own LCD library to output text to the screen. \n \n This particular screen is used to save patches.", PIC, 'synth screen1.jpg'],
	["Here you can see the Axoloti Core board as well as wiring for my various inputs.", PIC, 'synth back angle.jpg'],
	["I soldered every knob and button onto perfboard (generic circuit board). \n \n My next improvement will be to design my own printed circuit board to make everything cleaner. Following that will be a more stylistic enclosure.", PIC, 'synth back.jpg'],
	["", PIC, 'synth wires.jpg']
];

var sign = [
	["Rotating sign for New Belguim Brewery.", PIC, 'sign graphic2.jpg'],
	["Here is a rotating sign I designed, built, and installed along a highly-trafficked tour corridor at New Belgium Brewery. \n \n The sign shows the occupied status of the quality assurance lab in a fun, stylized way. It is utilized by the employees and enjoyed by the guests. \n \n The \"Open\" box rotates to one of four positions based on input from a control panel within the lab, so the sign reads either \"we're open,\" \"we're in a meeting,\" \"we're open for panel,\" or \"we're in training\". The control panel is described in detail in a separate window on my main portfolio page.", PIC, 'sign full.jpg'],
	['The sign is one of the main features along the tour route. Notice the plexiglass guard to avoid any pinched fingers.', PIC, 'sign hallway.jpg'],
	['For a fun challenge, I opted out of using microcontrollers to control the sign\'s position. I wanted it to be directed by the control panel, but also the physical position of the box. This way, if someone were to move the box out of place, the motor would engage and rotate until the box returned to its proper position. \n \n The copper pieces forming a diamond shape seen here form a custom four-way sliding switch. Depending on the setting of the control panel, the box rotates around until this switch hits a specific contact. Not visible are embedded skateboard bearings riding around the pipe for a smooth rotation.', PIC, 'sign contacts.jpg'],
	['A view of the motor, connected with gears and bike chains to the rotating box. New Belgium is all about the bikes.', PIC, 'sign motor.jpg'],
	['This photo shows four metal shims positioned in the way of the top gear. This is a clicker mechanism; my clients specifically requested the sign create a satisfying sound with every rotation.', PIC, 'sign motor cool.jpg'],
	['Here is the SolidWorks model used during the design consultations and fabrication.', PIC, 'sign model.jpg'],
	['A drawing with clear directions used to create the motor support pieces. \n \n Some dimensions are intentionally missing. Instead of trying to measure and mark every cut and hole precisely, I printed this drawing out to scale and glued it directly to the plexiglass to serve as my guide.', PIC, 'sign drawing.jpg'],
	['https://www.youtube.com/watch?v=oBpSsI6MKfg', LINK, 'video']
];

var crank = [
	["Control panel for New Belguim's rotating status sign.", PIC, 'crank graphic2.jpg'],
	["This control panel is used for directing the rotating status sign at New Belgium Brewery. The sign is described in detail in a separate window on my main portfolio page. \n \n The wheel functions as a four-way switch to dictate the status shown by the sign. \n \n The crank arm has bearings at either end that slide into the grooves of the switch wheel, turning the wheel a quarter turn at a time. \n \n Each of the four positions has its own LED color and custom-designed symbol.", PIC, 'crank open.jpg'],
	["A close-up... This one shows \"we're in a meeting.\" \n \n You can also see one of the bearings on the crank arm that rolls into the wheel's cutouts.", PIC, 'crank bearings2.jpg'],
	["This symbol means \"we're open for panel,\" or rather, it's time to taste some beers for quality assurance purposes.", PIC, 'crank panel.jpg'],
	["The metal mesh on the side of the control panel allows air flow and prevents overheating. \n \n The \"!\" symbol lights up while the motor is running and the sign is rotating into position. Below that symbol is a power switch and a place to hold a safety fuse.", PIC, 'crank side.jpg'],
	["The SolidWorks model of the control panel. This was taken before the addition of the metal mesh.", PIC, 'crank model.jpg'],
	["SolidWorks drawing of the crank wheel and symbols. \n \n I printed this out to scale on contact paper and adhered it directly to the plexiglass as a guide for shaping it.", PIC, 'crank drawing.jpg'],
	["For each piece, I printed out its design on contact paper, adhered the contact paper to the piece, and then stenciled out the design by hand using an exacto knife.  \n \n After this step, I spray painted each piece to fill in the symbol.", PIC, 'crank stencils.jpg'], 
	//["The nearly completed control panel on my workshop bench.", PIC, 'crank bench.jpg'],
	['https://www.youtube.com/watch?v=oBpSsI6MKfg', LINK, 'video']
];
	


new item(hardware, Retropie, "Retropie", 0, 1, 1, 1);
new item(hardware, synth, "digital synth", 0, 0, 1, 1);
new item(hardware, sign, "interactive sign", 1, 0, 1, 1); 
new item(hardware, crank, "control panel", 1, 1, 1, 1);


