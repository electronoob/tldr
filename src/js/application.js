var theme = new xpm_template();
theme.convert_xpm_to_canvas();
// x,y,w,h
var ui = new ui_class(50, 50, 200, 200);
ui.generate();

/* 
<div id="window_1" class="window">
<div id="content_1" class="content"></div>
</div>
*/
let wdow = ui.fake.active.canvas.toDataURL();
let w1 = document.getElementById('window_1');
w1.style.width = ui.fake.width + "px";
w1.style.height = ui.fake.height + "px";
w1.style.top = ui.fake.x + "px";
w1.style.left = ui.fake.y + "px";
w1.style.position = "absolute";
w1.style.zIndex = "100";
w1.style.backgroundImage = "url(" + wdow + ")";

let c1 = document.getElementById('content_1');
c1.style.width = ui.fake.w + "px";
c1.style.height = ui.fake.h + "px";
c1.style.top = ui.fake.origin.y + "px";
c1.style.left = ui.fake.origin.x + "px";
c1.style.position = "relative";

ui.dragElement(document.getElementById("window_1"));