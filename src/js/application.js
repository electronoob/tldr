var theme = new xpm_template();
theme.convert_xpm_to_canvas();
// x,y,w,h
var ui = new ui_class(50, 50, 200, 200, "tldr");
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



var buffer_vram = new ArrayBuffer(0x1fff);
var vram = new DataView(buffer_vram);

function gbhw () {
  this._HW = 0xFF00;
  this._VRAM = 0x8000;
  this._SCRN0 = 0x9800;
  this._SCRN1 = 0x9C00;
  this._RAM = 0xC000;
  this._HRAM = 0xF800;
  this._OAMRAM = 0xFE00;
  this._AUD3WAVERAM = 0xFF30;
  this.OAMF_PRI = 0b10000000;
  this.OAMF_YFLIP = 0b01000000;
  this.OAMF_XFLIP = 0b00100000;
  this.OAMF_PAL0 = 0b00000000;
  this.OAMF_PAL1 = 0b00010000;
  this.rP1 = 0xFF00;
  this.P1F_5 = 0b00100000;
  this.P1F_4 = 0b00010000;
  this.P1F_3 = 0b00001000;
  this.P1F_2 = 0b00000100;
  this.P1F_1 = 0b00000010;
  this.P1F_0 = 0b00000001;
  this.rLCDC = 0xFF40;
  this.LCDCF_OFF = 0b00000000;
  this.LCDCF_ON = 0b10000000;
  this.LCDCF_WIN9800 = 0b00000000;
  this.LCDCF_WIN9C00 = 0b01000000;
  this.LCDCF_WINOFF = 0b00000000;
  this.LCDCF_WINON = 0b00100000;
  this.LCDCF_BG8800 = 0b00000000;
  this.LCDCF_BG8000 = 0b00010000;
  this.LCDCF_BG9800 = 0b00000000;
  this.LCDCF_BG9C00 = 0b00001000;
  this.LCDCF_OBJ8 = 0b00000000;
  this.LCDCF_OBJ16 = 0b00000100;
  this.LCDCF_OBJOFF = 0b00000000;
  this.LCDCF_OBJON = 0b00000010;
  this.LCDCF_BGOFF = 0b00000000;
  this.LCDCF_BGON = 0b00000001;
  this.rSTAT = 0xFF41;
  this.STATF_LYC = 0b01000000;
  this.STATF_MODE10 = 0b00100000;
  this.STATF_MODE01 = 0b00010000;
  this.STATF_MODE00 = 0b00001000;
  this.STATF_LYCF = 0b00000100;
  this.STATF_HB = 0b00000000;
  this.STATF_VB = 0b00000001;
  this.STATF_OAM = 0b00000010;
  this.STATF_LCD = 0b00000011;
  this.STATF_BUSY = 0b00000010;
  this.rSCY = 0xFF42;
  this.rSCX = 0xFF43;
  this.rLY = 0xFF44;
  this.rLYC = 0xFF45;
  this.rDMA = 0xFF46;
  this.rBGP = 0xFF47;
  this.rOBP0 = 0xFF48;
  this.rOBP1 = 0xFF49;
  this.rSB = 0xFF01;
  this.rSC = 0xFF02;
  this.rDIV = 0xFF04;
  this.rTIMA = 0xFF05;
  this.rTMA = 0xFF06;
  this.rTAC = 0xFF07;
  this.TACF_START = 0b00000100;
  this.TACF_STOP = 0b00000000;
  this.TACF_4KHZ = 0b00000000;
  this.TACF_16KHZ = 0b00000011;
  this.TACF_65KHZ = 0b00000010;
  this.TACF_262KHZ = 0b00000001;
  this.rIF = 0xFF0F;
  this.rIE = 0xFFFF;
  this.IEF_HILO = 0b00010000;
  this.IEF_SERIAL = 0b00001000;
  this.IEF_TIMER = 0b00000100;
  this.IEF_LCDC = 0b00000010;
  this.IEF_VBLANK = 0b00000001;
  this.rWY = 0xFF4A;
  this.rWX = 0xFF4B;
  this.rNR50 = 0xFF24;
  this.rAUDVOL = this.rNR50;
  this.rNR51 = 0xFF25;
  this.rAUDTERM = this.rNR51;
  this.rNR52 = 0xFF26;
  this.rAUDENA = this.rNR52;
  this.rNR10 = 0xFF10;
  this.rAUD1SWEEP = this.rNR10;
  this.rNR11 = 0xFF11;
  this.rAUD1LEN = this.rNR11;
  this.rNR12 = 0xFF12;
  this.rAUD1ENV = this.rNR12;
  this.rNR13 = 0xFF13;
  this.rAUD1LOW = this.rNR13;
  this.rNR14 = 0xFF14;
  this.rAUD1HIGH = this.rNR14;
  this.rNR21 = 0xFF16;
  this.rAUD2LEN = this.rNR21;
  this.rNR22 = 0xFF17;
  this.rAUD2ENV = this.rNR22;
  this.rNR23 = 0xFF18;
  this.rAUD2LOW = this.rNR23;
  this.rNR24 = 0xFF19;
  this.rAUD2HIGH = this.rNR24;
  this.rNR30 = 0xFF1A;
  this.rAUD3ENA = this.rNR30;
  this.rNR31 = 0xFF1B;
  this.rAUD3LEN = this.rNR31;
  this.rNR32 = 0xFF1C;
  this.rAUD3LEVEL = this.rNR32;
  this.rNR33 = 0xFF1D;
  this.rAUD3LOW = this.rNR33;
  this.rNR34 = 0xFF1E;
  this.rAUD3HIGH = this.rNR34;
  this.rNR41 = 0xFF20;
  this.rAUD4LEN = this.rNR41;
  this.rNR42 = 0xFF21;
  this.rAUD4ENV = this.rNR42;
  this.rNR42_2 = 0xFF22;
  this.rAUD4POLY = this.rNR42_2;
  this.rNR43 = 0xFF23;
  this.rAUD4GO = this.rNR43;
  this.ROM_NOMBC = 0;
  this.ROM_MBC1 = 1;
  this.ROM_MBC1_RAM = 2;
  this.ROM_MBC1_RAM_BAT = 3;
  this.ROM_MBC2 = 5;
  this.ROM_MBC2_BAT = 6;
  this.ROM_NOMBC_RAM = 8;
  this.ROM_NOMBC_RAM_BAT = 9;
  this.ROM_SIZE_256KBIT = 0;
  this.ROM_SIZE_512KBIT = 1;
  this.ROM_SIZE_1M = 2;
  this.ROM_SIZE_2M = 3;
  this.ROM_SIZE_4M = 4;
  this.ROM_SIZE_8M = 5;
  this.ROM_SIZE_16M = 6;
  this.ROM_SIZE_32KBYTE = 0;
  this.ROM_SIZE_64KBYTE = 1;
  this.ROM_SIZE_128KBYTE = 2;
  this.ROM_SIZE_256KBYTE = 3;
  this.ROM_SIZE_512KBYTE = 4;
  this.ROM_SIZE_1MBYTE = 5;
  this.ROM_SIZE_2MBYTE = 6;
  this.RAM_SIZE_0KBIT = 0;
  this.RAM_SIZE_16KBIT = 1;
  this.RAM_SIZE_64KBIT = 2;
  this.RAM_SIZE_256KBIT = 3;
  this.RAM_SIZE_1MBIT = 4;
  this.RAM_SIZE_0KBYTE = 0;
  this.RAM_SIZE_2KBYTE = 1;
  this.RAM_SIZE_8KBYTE = 2;
  this.RAM_SIZE_32KBYTE = 3;
  this.RAM_SIZE_128KBYTE = 4;
  this.PADF_DOWN = 0x80;
  this.PADF_UP = 0x40;
  this.PADF_LEFT = 0x20;
  this.PADF_RIGHT = 0x10;
  this.PADF_START = 0x08;
  this.PADF_SELECT = 0x04;
  this.PADF_B = 0x02;
  this.PADF_A = 0x01;
  this.PADB_DOWN = 0x7;
  this.PADB_UP = 0x6;
  this.PADB_LEFT = 0x5;
  this.PADB_RIGHT = 0x4;
  this.PADB_START = 0x3;
  this.PADB_SELECT = 0x2;
  this.PADB_B = 0x1;
  this.PADB_A = 0x0;
  this.SCRN_X = 160;
  this.SCRN_Y = 144;
  this.SCRN_X_B = 20;
  this.SCRN_Y_B = 18;
  this.SCRN_VX = 256;
  this.SCRN_VY = 256;
  this.SCRN_VX_B = 32;
  this.SCRN_VY_B = 32;
}
var electronoob=[0b00000000,0b00000011,0b00001111,0b00011111,0b00111100,0b01111000,0b01110000,0b11110000,0b00000000,0b11110000,0b11111100,0b11111110,0b00001111,0b00011110,0b00111100,0b01111000,0b01110000,0b01110000,0b01110000,0b01110000,0b01110000,0b01110000,0b01110001,0b01110001,0b00000000,0b00000111,0b00011111,0b01111111,0b11111000,0b11110000,0b11100000,0b11000000,0b00000000,0b11000000,0b11110000,0b11111100,0b00111100,0b00111100,0b01111001,0b11110001,0b00000000,0b00000111,0b00011111,0b01111111,0b11111000,0b11100000,0b11100000,0b11000000,0b00000011,0b11000011,0b11110011,0b11111011,0b00111111,0b00011111,0b00001111,0b00000011,0b10000000,0b10000000,0b11111111,0b11111111,0b10000011,0b10000011,0b10000011,0b10000011,0b00000000,0b00011110,0b11111111,0b11111111,0b11100001,0b11000000,0b11000000,0b10000000,0b00000000,0b00000001,0b10001111,0b10011111,0b10111110,0b00111000,0b01111000,0b01110000,0b00000000,0b11110000,0b11111100,0b11111110,0b00001111,0b00000111,0b00000011,0b00000011,0b00000000,0b00000000,0b00011111,0b00011111,0b00011111,0b10011110,0b11011100,0b11011100,0b00000000,0b11111000,0b11111110,0b11111111,0b00000111,0b00000011,0b00000011,0b00000001,0b00000000,0b00000000,0b00000001,0b00000111,0b10000111,0b10001111,0b11011110,0b11011100,0b00000000,0b01111100,0b11111111,0b11111111,0b10000011,0b00000001,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b11000001,0b11100011,0b11100111,0b11110111,0b01110111,0b00000000,0b00111111,0b11111111,0b11111111,0b11000000,0b10000000,0b00000000,0b00000000,0b00000001,0b00000001,0b11000001,0b11100001,0b11110001,0b01111001,0b00111001,0b00111001,0b11000000,0b11000111,0b11111111,0b11111111,0b11111000,0b11100000,0b11100000,0b11000000,0b00000000,0b11000000,0b11110000,0b11111000,0b00111100,0b00011110,0b00001111,0b00001111,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b11110000,0b11100001,0b11110011,0b11110111,0b01111111,0b01111110,0b00111100,0b00011111,0b11110000,0b11100000,0b11000000,0b10000000,0b00000010,0b00000111,0b00001111,0b11111110,0b01110001,0b01110001,0b01110001,0b01110001,0b01110001,0b01110000,0b01111000,0b00111111,0b11000001,0b11000011,0b11000111,0b11001111,0b11111110,0b11111100,0b11111000,0b01111111,0b11100001,0b11000001,0b10000001,0b00000001,0b00001101,0b00011100,0b00111100,0b11111100,0b11000000,0b11000000,0b11000000,0b11000000,0b11100000,0b11100000,0b11111000,0b01111111,0b00000011,0b00000011,0b00000011,0b00000011,0b00001111,0b00011101,0b00111101,0b11111100,0b10000011,0b10000011,0b10000011,0b10000011,0b11000011,0b11000011,0b11100011,0b11111111,0b10000000,0b10000000,0b10000000,0b10000000,0b10000000,0b10000000,0b10000000,0b10000000,0b01110000,0b01110000,0b01110000,0b01110000,0b01111000,0b00111000,0b00111110,0b00011111,0b00000001,0b00000001,0b00000001,0b00000011,0b00000011,0b00000111,0b00001111,0b11111110,0b11011100,0b11011100,0b11011100,0b11011100,0b11011100,0b10011100,0b00011100,0b00011100,0b00000001,0b00000001,0b00000001,0b00000001,0b00000001,0b00000001,0b00000001,0b00000001,0b11011100,0b11011100,0b11011100,0b11011100,0b11011110,0b11001111,0b11000111,0b11000111,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000001,0b10000011,0b11111111,0b01111111,0b01111111,0b01111111,0b01110111,0b11110111,0b11100111,0b11100011,0b11000001,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b10000000,0b11000000,0b11111111,0b00111101,0b00111101,0b00111101,0b00111001,0b00111001,0b01111001,0b11110001,0b11100001,0b11000000,0b11000000,0b11000000,0b11000000,0b11100000,0b11100000,0b11111000,0b11111111,0b00000111,0b00000111,0b00000111,0b00001111,0b00001111,0b00011110,0b00111100,0b11111000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000,0b00000000];
//8000-9fff
var title = {
	p1: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
	p2: [22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]
};

var hw = new gbhw();

var i = 0;
//'clear'
var address = hw._SCRN0;
for(i=0; i<hw.SCRN_VX_B * hw.SCRN_VY_B; i++) {
	write_vram(address + i, 0x14);
}
//first row of tile data
address = hw._SCRN0;
for(i=0; i<title.p1.length; i++) {
	write_vram(address + i, title.p1[i]);
}

address = hw._SCRN0+hw.SCRN_VX_B;
for(i=0; i<title.p2.length; i++) {
	write_vram(address + i, title.p2[i]);
}

//mem_CopyMono
address = hw._VRAM;
for(i=0; i<electronoob.length*2; i+=2) {
	write_vram(address + i, electronoob[i/2]);
  write_vram(address + i + 1, electronoob[i/2]);
}

//20x18x8 visible
var background_canvas = document.createElement ("canvas");
background_canvas.width = 32*8;
background_canvas.height = 32*8;
var bgctx = background_canvas.getContext("2d");

  let lcd = document.getElementById("lcd");
  let lcdctx = lcd.getContext("2d");
  lcdctx.clearRect(0,0,160,144);

var x=0,y=0;
address = hw._SCRN0;
for(x=0; x<32; x++)
for(y=0; y<32; y++)
{
	address = hw._SCRN0 + (y*hw.SCRN_VY_B) + x;
  let cocks = read_vram(address);
  //console.log(cocks);
  address = hw._VRAM + (cocks*16);
	draw8x8x4 ( parse8x8x4(address) , x, y);
}
function draw8x8x4 (sprite_array, x, y) {
	let c = document.createElement("canvas");
  let ctx = c.getContext("2d");
	for(i=0;i<sprite_array.length;i++)
  	for(k = 0; k<8; k++) {
    	p = sprite_array[i][k];
      p = 255- (p*64);
        ctx.fillStyle="rgb(0,"+p+",0)";
        ctx.fillRect(7-k,i,1,1);
    }
    
  let lcd = document.getElementById("lcd");
  let lcdctx = lcd.getContext("2d");
  lcdctx.drawImage(c, x*8, y*8);
}


function parse8x8x4 (address) {
	var i = 0, j = 0, sprite=[],bufa="",bufb="",bufr="",a,b,_a,_b,bit_a,bit_b;
  var killmepls = [];
  for(i = 0; i<16;i++) {
  	killmepls.push(read_vram(address+i));
  }
	for(i = 0; i<16;i+=2) {
  	a = killmepls[i].toString(2);
    b = killmepls[i+1].toString(2);
    // yeah lets pretend i didnt do this shit
    _a = "00000000".substr(0, 8 - a.length) + a;
    _b = "00000000".substr(0, 8 - b.length) + b;
    for(k = 0; k<8; k++) {
    	bit_a = _a[7-k];
      bit_b = _b[7-k];
      bufa += bit_a; //lowbit
      bufb += bit_b; //highbit
      bufr += parseInt(bit_b + bit_a, 2);
    }
    sprite.push ( bufr );
    bufr = ""; bufa = ""; bufb = "";
  }
  return sprite;
}



function dump_vram () {
	let m = document.getElementById("memory");
  let buf = "";
  let i = 0;
  for(;i<0x1fff;i++) {
  	buf+=read_vram(i + 0x8000);
  }
  buf += "";
  m.innerHTML = buf;
}
function read_vram (address) {
	address = address - 0x8000;
	return vram.getUint8(address, false);
}
function write_vram (address, byte) {
  address = address - 0x8000;
	return vram.setUint8(address, byte, false);
}
