
// item(group, img, str, row, col, rows, cols) 
// group(str, color, row, col, rows, cols, colDivs, rowDivs) 

var carpentry = new group("carpentry", 3,0,1,1,1,2,2);

var dresser = [
	
	['Dresser with rotating drawers.', PIC, 'dresser graphic.jpg'],
	['The finished piece. \n \n The unique drawers on this piece rotate on a center axis with the help of bearings for a smooth opening and closing. Magnets hold the drawers closed.', PIC, 'dresser front.jpg'],
	['Because the drawers rotate open from the center, the design called for the knobs to be placed on the side of the drawers, as you see here.', PIC, 'dresser sides.jpg'],
	['The solid works model used during design and fabrication.', PIC, 'dresser openclose.jpg'],
	//['Playing with color combinations.', PIC, 'dresser colors.jpg'],
	
	['https://youtu.be/TYAhS4yGJI8', LINK, 'Video']
	
];

var table = [
	['Plywood edge-grain table with metal pipe legs.', PIC, 'table graphic.jpg'],
	["The tabletop has a 5 ft. diameter and 1 1/2 in. thickness.", PIC, 'table top.jpg'],
	["The surface of this table was built with 90 strips of 3/4 in. plywood. It was designed to showcase the intricate and unique layers of plywood edge grain. It's a great conversation starter.", PIC, 'table edge.jpg'],
	['To construct the table, I glued several strips together to give me foot-wide segments. This way, I could run each segment through the planer to ensure they were all the same thickness. \n \n  Afterward, I doweled and glued the segments together one-by-one.', PIC, 'table segments.jpg'],
	["The table comfortably sits six, perfect for cozy dinner parties and game nights.", PIC, 'table full.jpg'],
	["The plywood strips chosen for this piece came with a lot of character marks, mostly in the form of several tiny holes between the layers. Instead of hiding these, I filled them with multiple coats of wood filler to give it a cool speckled effect while keeping to top surface smooth.", PIC, 'table grain.jpg'],
	['I enjoy working with different materials. The metal pipes added an industrial vibe to the otherwise sleek tabletop. \n \n You can also see three bracing boards underneath the main table top. The top was quite flexible after gluing it together, so the braces were necessary to make it more rigid.', PIC, 'table under.jpg'],
	['SolidWorks model of the table.', PIC, 'table model.jpg']
];

var record = [
	['Mid-century modern display shelf.', PIC, 'record graphic.jpg'],
	['This piece presented a fun challenge: building those rounded corners with wood. I decided to cut multiple slits on the inside surface of the rounded frame. To create that level of curvature, the slits needed to be 1/4 in. apart and cut nearly through the entire thickness of the frame. This required both precision and patience.', PIC, 'record front.jpg'],
	['', PIC, 'record stuff.jpg'],
	['', PIC, 'record open.jpg'],
	['Modelled up using SolidWorks.', PIC, 'record model.jpg']
	
	
];



new item(carpentry, dresser, "rotating dresser", 0,0, 1, 2);
new item(carpentry, table, "plywood table", 1,0,1,1);
new item(carpentry, record, "display shelf", 1,1,1,1);


