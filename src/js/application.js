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
var electronoob=[
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xF0,0x00,0xF0,0x00,0xF0,0x00,0xF0,0x00,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0x02,0x00,0x02,0x02,0x02,0x02,0x02,0x02,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0x03,0x00,0x01,0x02,0x03,0x02,0x01,0x02,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xC0,0x00,0xE0,0x00,0xE0,0x00,0xE0,0x00,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0x07,0x00,0x03,0x04,0x07,0x04,0x06,0x04,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xE0,0x00,0x80,0x00,0x00,0x00,0x00,0x00,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0x60,0x00,0x20,0x40,0x60,0x00,0x40,0x20,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0x00,0x00,0x00,0x01,0x00,0x01,0x00,0x01,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0x3F,0x00,0x1F,0x00,0x0E,0x00,0x06,0x04,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xF3,0x00,0x80,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0x78,0x00,0x38,0x00,0x38,0x00,0x08,0x10,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0x3C,0x00,0x1C,0x00,0x0C,0x00,0x04,0x00,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0x78,0x00,0x30,0x40,0x20,0x40,0x20,0x40,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0x3F,0x00,0x07,0x00,0x03,0x00,0x03,0x00,0x00,0x01,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFE,0x00,0xF0,0x00,0xE0,0x00,0xC0,0x00,0x80,0x00,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0x7F,0x00,0x1E,0x00,0x0F,0x00,0x03,0x04,0x03,0x00,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0x3F,0x00,0x1F,0x00,0x0F,0x00,0x0F,0x00,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0xF0,0x00,0xF0,0x00,0xF0,0x00,0xF0,0x00,0xF0,0x00,0xF0,0x00,0xF0,0x00,0xF0,0x00,
  0x02,0x02,0x02,0x02,0x2E,0x12,0x3F,0x20,0x22,0x00,0x07,0x00,0x03,0x04,0x3F,0x3C,
  0x03,0x02,0x03,0x02,0x03,0x02,0x03,0x02,0x03,0x02,0x07,0x02,0x03,0x02,0x07,0x02,
  0xE0,0x00,0xE0,0x00,0xE0,0x00,0xE0,0x00,0xE0,0x00,0xE0,0x00,0xE0,0x00,0xE0,0x00,
  0x06,0x04,0x04,0x04,0x5C,0x24,0x7C,0x40,0x44,0x00,0x0C,0x00,0x04,0x08,0x7E,0x78,
  0x00,0x00,0x00,0x00,0x03,0x00,0x03,0x06,0x07,0x04,0x07,0x0C,0x0F,0x00,0x0F,0x00,
  0x40,0x20,0x00,0x20,0x24,0xE8,0xFC,0x00,0xFC,0x00,0xFC,0x00,0xFC,0x00,0xFC,0x00,
  0x01,0x01,0x01,0x01,0x03,0x0D,0x1F,0x08,0x1F,0x08,0x1F,0x08,0x1F,0x08,0x0F,0x10,
  0x00,0x00,0x00,0x00,0x03,0x00,0x01,0x03,0x01,0x02,0x01,0x02,0x00,0x00,0x00,0x00,
  0x00,0x04,0x04,0x00,0x00,0x04,0x80,0x04,0x84,0x04,0x04,0x0C,0x1C,0x08,0x1E,0x30,
  0x00,0x00,0x00,0x00,0x04,0x00,0x1E,0x0C,0x0E,0x18,0x1E,0x10,0x0E,0x10,0x1C,0x00,
  0x18,0x00,0x08,0x08,0x08,0x08,0x08,0x08,0x08,0x08,0x08,0x08,0x18,0x08,0x08,0x18,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x40,0x00,0x60,0x40,
  0x60,0x40,0x40,0x40,0x40,0x40,0x41,0x40,0x40,0x41,0x40,0x41,0x40,0x41,0x60,0x40,
  0x01,0x00,0x00,0x00,0x40,0x00,0xE0,0xC0,0xE0,0x80,0xE0,0x00,0xE0,0x00,0xE0,0x81,
  0x80,0x00,0x80,0x80,0x01,0x80,0x81,0x03,0x03,0x82,0x83,0x82,0x83,0x82,0x81,0x82,
  0x01,0x02,0x01,0x02,0x02,0x01,0x82,0x01,0xC2,0x01,0xC0,0x03,0x81,0x02,0x83,0x02,
  0x00,0x00,0x02,0x00,0x01,0x03,0x01,0x02,0x03,0x00,0x00,0x00,0x00,0x00,0x03,0x03,
  0x0F,0x04,0x07,0x04,0x0F,0x04,0x07,0x0C,0x1F,0x08,0x3F,0x18,0x3F,0x10,0x1F,0x00,
  0xF0,0x00,0xF0,0x00,0xF0,0x00,0xF0,0x00,0xFF,0x07,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0x3F,0x20,0x03,0x00,0x07,0x02,0x07,0x02,0xFF,0xFC,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0x07,0x02,0x02,0x00,0x00,0x00,0x00,0x00,0xFF,0x7F,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0xE0,0x00,0x20,0x00,0x60,0x20,0x20,0x40,0xFF,0xCF,0xFF,0x00,0xFF,0x1F,0xFF,0x3F,
  0x7E,0x40,0x07,0x00,0x0F,0x04,0x07,0x0F,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0x07,0x00,0x00,0x00,0x80,0x00,0xE0,0xC0,0xF2,0xFD,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0xFC,0x00,0x3C,0x00,0x3C,0x40,0x3C,0x40,0xFF,0xC0,0xFF,0x80,0xFF,0xFC,0xFF,0xFE,
  0x1F,0x00,0x0F,0x10,0x0F,0x10,0x0F,0x10,0xFF,0xF0,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0x00,0x00,0x00,0x02,0x01,0x02,0x01,0x02,0xFF,0x3E,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0x0E,0x10,0x0F,0x00,0x07,0x00,0x07,0x0C,0xBF,0x38,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0x04,0x08,0x00,0x00,0x00,0x00,0xC0,0x00,0xE9,0x17,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0x1C,0x10,0x1C,0x30,0x3C,0x60,0x7C,0xC0,0xFF,0x81,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0x70,0x40,0x7C,0x40,0x7E,0x40,0x7F,0x40,0xFF,0xC0,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0x60,0x40,0xF0,0x40,0x78,0x40,0xFC,0x40,0xFE,0x01,0xFF,0x00,0xFF,0x1F,0xFF,0x3F,
  0xC1,0x01,0x01,0x03,0x07,0x02,0x07,0x0F,0x5F,0xBF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0xC0,0x01,0xC0,0x00,0xE0,0x00,0xF8,0xF0,0xFD,0xFE,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0x07,0x02,0x07,0x04,0x0F,0x0C,0x3F,0x18,0x3F,0xE0,0xFF,0x80,0xFF,0xFC,0xFF,0xFE,
  0x03,0x02,0x02,0x00,0x00,0x00,0x00,0x00,0xC1,0x7F,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0x1F,0x08,0x1F,0x08,0x3F,0x10,0x7F,0x30,0xFF,0xC0,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0xFF,0x00,0xFC,0x00,0xF8,0x00,0xF0,0x00,0xE0,0x00,0xE0,0x00,0xE0,0x00,0xF0,0x00,
  0xFF,0x00,0x07,0x00,0x07,0x04,0x06,0x04,0x06,0x04,0x04,0x04,0x00,0x04,0x18,0x04,
  0xFF,0x00,0x80,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xFF,0x7F,0xF8,0x78,0x78,0x38,0x18,0x38,0x18,0x18,0x08,0x18,0x08,0x18,0x10,0x08,
  0xFF,0xFF,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x03,0x01,0x03,0x01,0x1F,0x01,
  0xFF,0xFF,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x60,0x00,
  0xFF,0xFF,0x08,0x08,0x0C,0x00,0x04,0x08,0x04,0x0C,0x04,0x0C,0x06,0x0E,0x76,0x0E,
  0xFF,0x00,0x0C,0x00,0x0C,0x08,0x04,0x08,0x0C,0x04,0x04,0x04,0x04,0x04,0x00,0x04,
  0xFF,0x00,0x0E,0x00,0x0E,0x08,0x0C,0x08,0x04,0x08,0x0C,0x00,0x0C,0x00,0x0C,0x00,
  0xFF,0x00,0x3C,0x00,0x3C,0x20,0x78,0x20,0x38,0x60,0x78,0x40,0xF8,0x40,0x78,0xC0,
  0xFF,0x00,0x0F,0x00,0x07,0x08,0x07,0x08,0x0F,0x00,0x07,0x04,0x07,0x04,0x03,0x04,
  0xFF,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x01,0x00,
  0xFF,0x00,0x3E,0x00,0x1C,0x00,0x0E,0x06,0x02,0x06,0x06,0x00,0x04,0x02,0x00,0x02,
  0xFF,0x7F,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x07,0x00,
  0xFF,0xFF,0x7F,0x7F,0x7F,0x7F,0x7F,0x7F,0x7F,0x7F,0x7F,0x7F,0x7F,0x7F,0xFF,0x7F,
  0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0xFF,0x00,0xFF,0x00,0xFF,0x80,0xFF,0xF0,0xFF,0xFC,0xFF,0xFE,0xFF,0xFF,0xFF,0xFF,
  0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x80,
  0xF0,0x00,0xF8,0x00,0xFC,0x00,0xFE,0x00,0xFF,0x00,0xFF,0x00,0xF8,0x00,0xF8,0x00,
  0x1C,0x10,0x3C,0x10,0x0C,0x10,0x04,0x0C,0x04,0x0C,0x06,0x0E,0x06,0x0E,0x0F,0x0F,
  0x1C,0x0C,0x1E,0x1E,0x1E,0x1E,0x1E,0x1E,0x0C,0x1C,0x08,0x0C,0x00,0x00,0x00,0x00,
  0x18,0x08,0x10,0x08,0x18,0x08,0x08,0x18,0x08,0x18,0x38,0x18,0x30,0x38,0x20,0x78,
  0x0F,0x1F,0x0F,0x1F,0x0F,0x1F,0x03,0x01,0x03,0x03,0x1E,0x03,0x14,0x1F,0x10,0x1F,
  0xE0,0xE0,0xE0,0xE0,0x60,0xE0,0xE0,0xE0,0x50,0xF0,0x00,0xE0,0x00,0xE0,0x00,0xF0,
  0x7E,0x7E,0x7F,0x7F,0x7F,0x7F,0x7F,0x7F,0xFF,0x7F,0x4B,0x7F,0x55,0x7F,0xC2,0x7F,
  0x00,0x00,0x00,0x00,0x01,0x00,0x01,0x01,0x81,0x81,0x83,0x81,0x01,0x83,0x03,0x83,
  0x00,0x00,0x01,0x00,0x00,0x01,0x01,0x01,0x03,0x01,0x81,0x83,0x82,0x83,0x83,0x82,
  0xF8,0x80,0xF0,0x80,0xF1,0x80,0xF1,0x01,0xF3,0x01,0xE3,0x01,0xE0,0x00,0xE2,0x00,
  0x07,0x00,0x03,0x02,0x03,0x02,0x01,0x02,0x83,0x00,0x83,0x01,0x01,0x01,0x00,0x01,
  0x03,0x01,0x03,0x01,0x03,0x01,0x00,0x00,0x00,0x00,0x80,0x00,0x80,0x02,0x81,0x02,
  0x04,0x82,0x80,0x86,0x8E,0x86,0x0E,0x0E,0x3E,0x1E,0x0A,0x1E,0x06,0x0E,0x02,0x06,
  0x07,0x07,0x04,0x00,0x00,0x00,0x00,0x00,0x02,0x07,0x0C,0x07,0x04,0x00,0x00,0x00,
  0xFF,0xFF,0xFF,0xFF,0xFF,0x7F,0x6B,0xFF,0xF5,0xFF,0x80,0xFF,0x44,0x7F,0xC0,0x7F,
  0xFF,0xFF,0xFF,0xFF,0x7F,0xFF,0xEB,0xFF,0x57,0xFF,0x00,0xFF,0x11,0xFF,0x00,0xFF,
  0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0x7F,0xFF,0x8B,0xFF,0x15,0xFF,0x02,0xFF,
  0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xAF,0xFF,0x7F,0xFF,0x2B,0xFF,
  0xFF,0xC0,0xFF,0xC0,0xFF,0xE0,0xF7,0xF8,0xFF,0xFC,0xFF,0xFE,0xFE,0xFF,0xFF,0xFE,
  0xF8,0x00,0xFE,0x01,0xFF,0x01,0xFF,0x00,0xFD,0x03,0xFC,0x03,0xFF,0x00,0xFF,0x01,
  0x3F,0x1F,0xBF,0x7F,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0xC0,0x80,0xDD,0xE3,0xD4,0xFF,0xA0,0xFF,0xD0,0xFF,0xA0,0xFF,0xC4,0xFF,0x80,0xFF,
  0x50,0xF8,0x80,0xFF,0x44,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x04,0xFF,0x00,0xFF,
  0x10,0x1F,0x90,0xFF,0x00,0xFF,0x11,0xEE,0x00,0xFF,0x45,0xBA,0x00,0xFF,0x11,0xEE,
  0x00,0xF0,0x02,0xFF,0x00,0xFF,0x44,0xBB,0x00,0xFF,0x51,0xAE,0x00,0xFF,0x44,0xBB,
  0xC5,0x7F,0x80,0xFF,0x11,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x10,0xFF,0x00,0xFF,
  0x47,0xC3,0x07,0xFF,0x15,0xFF,0x02,0xFF,0x05,0xFF,0x02,0xFF,0x11,0xFF,0x00,0xFF,
  0x83,0x87,0xC7,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0xE4,0x02,0xF7,0x0C,0xFF,0xC0,0xFF,0x80,0xDF,0xE0,0x9F,0xE0,0xFF,0x80,0xFF,0xC0,
  0x80,0xC1,0xE9,0x9F,0xFF,0x01,0xFF,0x00,0xFD,0x03,0xFC,0x03,0xFF,0x00,0xFF,0x01,
  0x81,0x03,0xD3,0x7F,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0x08,0x06,0xB8,0x9F,0xD4,0xFF,0xA0,0xFF,0xD0,0xFF,0xA0,0xFF,0xC4,0xFF,0x80,0xFF,
  0x00,0x00,0x24,0xFF,0x44,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x04,0xFF,0x00,0xFF,
  0x40,0xFF,0xC0,0xBF,0x00,0xFF,0x11,0xEE,0x00,0xFF,0x45,0xBA,0x00,0xFF,0x11,0xEE,
  0x00,0xFF,0x01,0xFE,0x00,0xFF,0x44,0xBB,0x00,0xFF,0x51,0xAE,0x00,0xFF,0x44,0xBB,
  0x05,0xFF,0x00,0xFF,0x11,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x10,0xFF,0x00,0xFF,
  0x5F,0xFF,0x0B,0xFF,0x15,0xFF,0x02,0xFF,0x05,0xFF,0x02,0xFF,0x11,0xFF,0x00,0xFF,
  0xFF,0x00,0xFF,0x00,0xFF,0xC0,0xFF,0x80,0xDF,0xE0,0x9F,0xE0,0xFF,0x80,0xFF,0xC0,
  0xFF,0x01,0xFF,0x03,0xFF,0x03,0xFF,0x07,0xFF,0x0F,0xFF,0x0F,0xFF,0x07,0xFF,0x07,
  0xFF,0xFF,0xFE,0xFF,0xFF,0xFF,0xFE,0xFF,0xFD,0xFF,0xF8,0xFF,0xFC,0xFF,0xF0,0xFF,
  0x51,0xFF,0x80,0xFF,0x54,0xFF,0x00,0xFF,0x10,0xFF,0x00,0xFF,0x55,0xFF,0x2E,0xFF,
  0x00,0xFF,0x00,0xFF,0x40,0xFF,0x01,0xFE,0x00,0xFF,0x04,0xFB,0x40,0xFF,0xA2,0xFF,
  0x02,0xFD,0x55,0xAA,0x00,0xFF,0x15,0xEA,0x22,0xDD,0x55,0xAA,0x28,0xD7,0x15,0xEA,
  0x20,0xDF,0x55,0xAA,0x80,0x7F,0x54,0xAB,0xA2,0x5D,0x55,0xAA,0x8A,0x75,0x54,0xAB,
  0x00,0xFF,0x00,0xFF,0x01,0xFF,0x40,0xBF,0x00,0xFF,0x10,0xEF,0x01,0xFF,0x22,0xFF,
  0x45,0xFF,0x00,0xFF,0x15,0xFF,0x00,0xFF,0x04,0xFF,0x00,0xFF,0x55,0xFF,0xBA,0xFF,
  0x7F,0xFF,0xBF,0xFF,0x7F,0xFF,0x3F,0xFF,0x5F,0xFF,0x0F,0xFF,0x1F,0xFF,0x07,0xFF,
  0xFF,0xC0,0xFF,0xE0,0xFF,0xE0,0xFF,0xF0,0xFF,0xF8,0xFF,0xF8,0xFF,0xF0,0xFF,0xF0,
  0xFF,0x03,0xFF,0x07,0xFF,0x03,0xFF,0x03,0xFF,0x03,0xFF,0x03,0xFF,0x01,0xFF,0x03,
  0xF0,0xFF,0xF0,0xFF,0xE1,0xFF,0xE0,0xFF,0xE1,0xFF,0xE2,0xFF,0xFF,0xFF,0xFE,0xFF,
  0x7F,0xFF,0x2F,0xFF,0xFF,0xFF,0x22,0xFF,0x50,0xFF,0x04,0xFB,0xFF,0xFF,0x57,0xA8,
  0xF5,0xFF,0xFE,0xFF,0xFF,0xFF,0xFE,0xFF,0x1F,0xFF,0x4A,0xBF,0xFF,0xFF,0xE7,0x1F,
  0x4A,0xF5,0x97,0xE8,0x4A,0xF5,0x85,0xFA,0xD2,0xFD,0xA5,0xFA,0xF5,0xFF,0xFF,0xFF,
  0xA9,0x57,0xF4,0x0B,0xA9,0x57,0x50,0xAF,0xA5,0x5F,0x52,0xAF,0x57,0xFF,0xFF,0xFF,
  0x57,0xFF,0xBF,0xFF,0x7F,0xFF,0xBF,0xFF,0xFC,0xFF,0xA9,0xFE,0xFF,0xFF,0xF3,0xFC,
  0xFF,0xFF,0xFA,0xFF,0xFF,0xFF,0xA2,0xFF,0x05,0xFF,0x10,0xEF,0xFF,0xFF,0xF5,0x0A,
  0x07,0xFF,0x07,0xFF,0xC3,0xFF,0x03,0xFF,0x43,0xFF,0x23,0xFF,0xFF,0xFF,0x3F,0xFF,
  0xFF,0xE0,0xFF,0xF0,0xFF,0xE0,0xFF,0xE0,0xFF,0xE0,0xFF,0xE0,0xFF,0xC0,0xFF,0xE0,
  0xFD,0x03,0xFF,0x01,0xFF,0x01,0xFE,0x01,0xFF,0x01,0xFF,0x03,0xFF,0x03,0xFF,0x03,
  0xFA,0xF5,0xE7,0xF8,0xFB,0xD4,0xEF,0xD0,0xEA,0xD5,0xFF,0xC0,0xC8,0xF7,0xF1,0xEE,
  0xA3,0x5C,0x41,0xBE,0x83,0x7C,0xD7,0x28,0x93,0x7C,0x40,0xBF,0x08,0xF7,0x5D,0xA2,
  0x81,0x7F,0xEA,0x1F,0x97,0x7F,0x2A,0xFF,0x39,0xFF,0xBA,0xFF,0x47,0xFF,0x52,0xAF,
  0xFF,0x7F,0x5F,0xBF,0x1F,0xFF,0x9E,0xEF,0x0C,0xFF,0x9D,0xEE,0x4E,0xFD,0x0D,0xFA,
  0xFF,0xFF,0xFD,0xFE,0xFC,0xFF,0x3C,0xFB,0x18,0xFF,0x5C,0xBB,0xB9,0x5F,0xD8,0x2F,
  0xC0,0x7F,0x2B,0xFC,0x74,0xFF,0xAA,0xFF,0x4E,0xFF,0xAE,0xFF,0x71,0xFF,0x25,0xFA,
  0xE2,0x1D,0xC1,0x3E,0xE0,0x1F,0x75,0x8A,0x64,0x9F,0x81,0xFE,0x08,0xF7,0x5D,0xA2,
  0xAF,0x57,0x73,0x8F,0xEF,0x15,0xFB,0x05,0xAB,0x55,0x7F,0x81,0x09,0xF7,0x47,0xBB,
  0xDF,0xE0,0xFF,0xC0,0xFF,0xC0,0xBF,0xC0,0xFF,0xC0,0xFF,0xE0,0xFF,0xE0,0xFF,0xE0,
  0xFF,0x03,0xFF,0x01,0xFD,0x02,0xFF,0x00,0xFE,0x01,0xFE,0x01,0xFE,0x01,0xFF,0x00,
  0xE8,0xF7,0xF5,0xAA,0xB8,0xE7,0xFD,0xB2,0x3A,0xD5,0xFF,0x18,0xFC,0x0B,0xFD,0x06,
  0x2A,0xD5,0x55,0xAA,0x00,0xFF,0x41,0xBE,0x00,0xFF,0x55,0xAA,0x08,0xF7,0x15,0xEA,
  0x04,0xFF,0x44,0xBB,0x80,0x7F,0x91,0x6E,0x00,0xFF,0x55,0xAA,0x88,0x77,0x5C,0xA3,
  0x1A,0xFD,0x1F,0xF8,0x12,0xFD,0x35,0xFA,0x3A,0xF5,0x37,0xE8,0xEA,0x75,0xDD,0xE2,
  0xAC,0x5F,0xFC,0x0F,0xA4,0x5F,0xD6,0x2F,0xAE,0x57,0xF6,0x0B,0xAB,0x57,0xDD,0x23,
  0x10,0xFF,0x11,0xEE,0x00,0xFF,0x44,0xBB,0x00,0xFF,0x55,0xAA,0x88,0x77,0x9D,0xE2,
  0x2A,0xD5,0x55,0xAA,0x80,0x7F,0xC1,0x3E,0x00,0xFF,0x55,0xAA,0x88,0x77,0x54,0xAB,
  0x0B,0xF7,0x57,0xAA,0x0E,0xF3,0x5F,0xA6,0x2E,0xD5,0x7F,0x8C,0x1F,0xE8,0x5F,0xB0,
  0xFF,0xE0,0xFF,0xC0,0xDF,0xA0,0xFF,0x80,0x3F,0xC0,0xBF,0x40,0xBF,0x40,0xFF,0x00,
  0xFE,0x01,0xFF,0x00,0xFE,0x01,0xFD,0x02,0xFC,0x07,0xFD,0x06,0xFC,0x07,0xFD,0x06,
  0xEF,0x13,0xFF,0x00,0xBA,0x45,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0x82,0xFD,0xEB,0xFF,0xAA,0x55,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0xA7,0x5F,0xBC,0xFF,0xA0,0x5F,0xD5,0x2A,0xEB,0x14,0xF7,0x08,0xAA,0x55,0xDD,0x22,
  0xCB,0xF4,0x9F,0xE0,0xBF,0x40,0xFF,0x00,0xEF,0x10,0x1F,0xE0,0x2B,0xD4,0x7F,0x80,
  0xE9,0x17,0xFC,0x03,0xFE,0x01,0xFF,0x00,0xFB,0x04,0xFC,0x03,0xEA,0x15,0xFF,0x00,
  0xF2,0xFD,0x9E,0xFF,0x82,0x7D,0xD5,0x2A,0xEB,0x14,0x77,0x88,0x2A,0xD5,0x5D,0xA2,
  0xA0,0x5F,0xEB,0xFF,0xAA,0x55,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0xFB,0xE4,0xFF,0x80,0xAE,0x51,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0xBF,0x40,0xFF,0x00,0xBF,0x40,0xDF,0x20,0x9F,0x70,0xDF,0x30,0x9F,0x70,0xDF,0x30,
  0xFE,0x05,0xFF,0x04,0xFC,0x03,0xFD,0x02,0xFC,0x03,0xFF,0x02,0xFE,0x03,0xFF,0x02,
  0xFF,0x00,0x7F,0x80,0xAB,0x54,0xDF,0x20,0xFA,0x05,0xD7,0x28,0xAA,0x55,0xF3,0x0C,
  0xFE,0x01,0xFF,0x00,0xFA,0x05,0xFD,0x02,0xE8,0x17,0xF4,0x0B,0xA7,0x5F,0xD3,0x2F,
  0xAE,0x51,0x7D,0x82,0x81,0x7F,0x6A,0xFF,0x7F,0xFF,0xBB,0xFF,0xFF,0xFF,0xEF,0xFF,
  0xAA,0x55,0x07,0xF8,0x56,0xFD,0xE9,0xFE,0xFC,0xFF,0xFB,0xFE,0xFC,0xFF,0xA9,0xFE,
  0xAA,0x55,0xF0,0x0F,0xB5,0x5F,0xCB,0x3F,0x1F,0xFF,0x6F,0xBF,0x1F,0xFF,0xCA,0x3F,
  0xBA,0x45,0x5F,0xA0,0x40,0xFF,0xAB,0xFF,0xFF,0xFF,0xEE,0xFF,0xFF,0xFF,0xFB,0xFF,
  0xBF,0x40,0x7F,0x80,0xAF,0x50,0x5F,0xA0,0x0B,0xF4,0x97,0xE8,0xF2,0xFD,0xE5,0xFA,
  0xFF,0x00,0xFF,0x00,0xEA,0x15,0xFD,0x02,0xAF,0x50,0xF5,0x0A,0xAA,0x55,0xE7,0x18,
  0xBF,0x50,0x7F,0x90,0x9F,0x60,0xDF,0x20,0x9F,0x60,0xFF,0x20,0xBF,0x60,0xFF,0x20,
  0xFE,0x03,0xFF,0x00,0xFF,0x01,0xFF,0x01,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0x6B,0x94,0xD7,0x28,0x0A,0xF5,0x59,0xA6,0x8A,0x75,0xD5,0xAA,0xA8,0xD7,0xFD,0x82,
  0xA7,0x5F,0x6B,0x9F,0xB7,0x5F,0xCF,0x3F,0x27,0xDF,0x43,0xBF,0x27,0xDF,0x1A,0xEF,
  0xFF,0xFF,0xF8,0xFF,0xFF,0xFF,0xE1,0xFE,0xF2,0xFD,0xE7,0xF8,0x4B,0xF4,0x1F,0xE0,
  0xD2,0xFD,0x87,0xF8,0x0A,0xF5,0x03,0xFC,0x22,0xDD,0xF7,0x08,0xFF,0x00,0xFF,0x00,
  0xA5,0x5F,0xF0,0x0F,0xA8,0x57,0xE0,0x1F,0xA2,0x5D,0xF7,0x08,0xFF,0x00,0xFF,0x00,
  0xFF,0xFF,0x8F,0xFF,0x7F,0xFF,0x43,0xBF,0x27,0xDF,0xF3,0x0F,0xE9,0x17,0xFC,0x03,
  0xF2,0xFD,0xEB,0xFC,0xF6,0xFD,0xF9,0xFE,0xF2,0xFD,0xE1,0xFE,0x72,0xFD,0x2C,0xFB,
  0xEB,0x14,0x75,0x8A,0xA8,0x57,0xCD,0x32,0x28,0xD7,0x55,0xAA,0x0A,0xF5,0x5F,0xA0,
  0x3F,0xE0,0xFF,0x00,0x7F,0xC0,0x7F,0xC0,0xFF,0x00,0xFF,0x80,0xFF,0x80,0xFF,0x80,
  0xCA,0x75,0xD5,0x6A,0xC2,0x3D,0xF4,0x2B,0xE8,0x37,0xE4,0x3B,0xF1,0x1F,0xFC,0x1B,
  0x07,0xFF,0x4A,0xBF,0x5E,0xFF,0x3E,0xFF,0x7F,0xFF,0x7A,0xFF,0x7F,0xFF,0xBF,0xFF,
  0x2F,0xD0,0x77,0x88,0x00,0xFF,0x87,0xF8,0xCB,0xF5,0xA5,0xFA,0xE0,0xFF,0xAA,0xFF,
  0xAA,0x55,0x55,0xAA,0x68,0xF7,0x14,0xEB,0xC2,0x3D,0x30,0xCF,0x04,0xFF,0x49,0xBE,
  0xAA,0x55,0x55,0xAA,0x0B,0xF7,0x14,0xEB,0x21,0xDE,0x06,0xF9,0x10,0xFF,0x49,0xBE,
  0xFA,0x05,0x77,0x88,0x00,0xFF,0x70,0x8F,0xE9,0x57,0x52,0xAF,0x03,0xFF,0x2A,0xFF,
  0x70,0xFF,0x29,0xFE,0x3D,0xFF,0xBE,0xFF,0xFF,0xFF,0xAF,0xFF,0xFF,0xFF,0xFE,0xFF,
  0x29,0xD7,0x55,0xAB,0x21,0xDE,0x17,0xEA,0x0B,0xF6,0x13,0xEE,0x47,0xFC,0x9F,0xEC,
  0xFA,0x0D,0xFB,0x0C,0xFE,0x05,0xFE,0x07,0xFF,0x07,0xFF,0x03,0xFF,0x03,0xFF,0x01,
  0x7F,0xFF,0x7F,0xFF,0x5F,0xFF,0x7F,0xFF,0x7F,0xFD,0xBE,0xFF,0xFF,0xFF,0xFE,0xFF,
  0xF5,0xFF,0xA8,0xFF,0xFF,0xFF,0xFB,0xFE,0xFF,0xFF,0xFE,0xFF,0xFE,0xFF,0xFF,0xFF,
  0x12,0xFD,0x69,0xBE,0x27,0xDE,0x90,0xEF,0xC7,0xFD,0x80,0xFF,0x74,0xFF,0xEB,0xFE,
  0xA4,0x5F,0x4B,0xBE,0x72,0xBD,0x04,0xFB,0x71,0xDF,0x80,0xFF,0x17,0xFF,0xEB,0xBF,
  0x57,0xFF,0x0A,0xFF,0x7F,0xFF,0xEF,0xBF,0xFF,0xFF,0xBF,0xFF,0x3F,0xFF,0xFF,0xFF,
  0xFF,0xFF,0xFF,0xFF,0xFD,0xFF,0xFF,0xFF,0xFF,0xDF,0xBE,0xFF,0xFF,0xFF,0xBF,0xFF,
  0x2F,0xD8,0x6F,0x98,0x3F,0xD0,0x3F,0xF0,0x7F,0xF0,0xFF,0xE0,0xFF,0xE0,0xFF,0xC0,
  0xFF,0x01,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0xFF,0xFF,0xFF,0xFF,0xFF,0x7F,0xFF,0x7F,0xFF,0x7F,0xFF,0x7F,0xFF,0xFF,0xF7,0xFF,
  0xDC,0xFF,0xFA,0xFF,0xF7,0xFF,0xF7,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0x9D,0xFF,0xAF,0xFF,0xF7,0xFF,0xF7,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xF7,0xFF,
  0xFF,0xC0,0xFF,0x80,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x80,0xFF,0x80,
  0xFF,0xFF,0xFF,0x7F,0xFF,0x7F,0xFF,0x3F,0xFF,0x3F,0xFF,0x3F,0xFF,0x1F,0xFF,0x1F,
  0xFF,0xFF,0xFF,0xFF,0xDF,0xFF,0xFF,0xFF,0xFB,0xFF,0xFB,0xFF,0xFF,0xFF,0xFF,0xFF,
  0xFF,0xFF,0xFF,0xFF,0xFD,0xFF,0xFF,0xFF,0xEF,0xFF,0xEF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFE,0xFF,0xFE,0xFF,0xFE,0xFF,0xFC,0xFF,0xFC,
  0xFF,0x80,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0xFF,0x1F,0xFD,0x0F,0xFF,0x07,0xFE,0x03,0xFF,0x01,0xFF,0x00,0xFF,0x00,0xFF,0x00,
  0xD7,0xFF,0xBF,0xFF,0xFF,0xFF,0xFF,0xFF,0xBF,0xFF,0xFE,0xFF,0xFF,0x3F,0xFF,0x1F,
  0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0x7F,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
  0xF5,0xFF,0xFE,0xFF,0xFF,0xFF,0xFF,0xFF,0x7E,0xFF,0xBF,0xFF,0xFF,0xFE,0xFF,0xFC,
  0xFF,0xFC,0xDF,0xF8,0xFF,0xF0,0xBF,0xE0,0xFF,0xC0,0xFF,0x80,0xFF,0x00,0xFF,0x00
];
//8000-9fff
var map = [
  0x00,0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A,0x0B,0x0C,0x0D,0x0E,0x0F,
  0x10,0x08,0x11,0x12,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1A,0x1B,0x1C,0x1D,0x1E,0x1F,0x20,0x21,0x22,
  0x23,0x24,0x25,0x12,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x26,0x27,0x28,0x29,0x2A,0x2B,0x2C,0x2D,0x2E,0x2F,0x30,0x31,0x32,0x33,0x34,0x35,
  0x36,0x37,0x38,0x12,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x39,0x3A,0x3B,0x3C,0x3D,0x3E,0x3F,0x40,0x41,0x42,0x43,0x44,0x45,0x46,0x47,0x48,
  0x48,0x49,0x4A,0x12,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x4B,0x4C,0x4D,0x4E,0x4F,0x50,0x51,0x52,0x53,0x54,0x55,0x56,0x57,0x58,0x59,0x5A,
  0x5B,0x5C,0x5D,0x12,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x5E,0x5F,0x60,0x61,0x62,0x63,0x64,0x65,0x66,0x67,0x68,0x69,0x6A,0x6B,0x6C,0x6D,
  0x6E,0x6F,0x48,0x70,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x71,0x72,0x73,0x74,0x75,0x76,0x77,0x78,0x79,0x7A,0x71,0x72,0x73,0x74,0x75,0x76,
  0x77,0x78,0x79,0x7A,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x7B,0x7C,0x7D,0x7E,0x7F,0x80,0x81,0x82,0x83,0x84,0x7B,0x7C,0x7D,0x7E,0x7F,0x80,
  0x81,0x82,0x83,0x84,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x85,0x86,0x87,0x88,0x89,0x8A,0x8B,0x8C,0x8D,0x8E,0x85,0x86,0x87,0x88,0x89,0x8A,
  0x8B,0x8C,0x8D,0x8E,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x8F,0x90,0x91,0x92,0x93,0x94,0x95,0x96,0x97,0x98,0x8F,0x90,0x91,0x92,0x93,0x94,
  0x95,0x96,0x97,0x98,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x99,0x9A,0x9B,0x9C,0x9D,0x9E,0x9F,0xA0,0xA1,0xA2,0x99,0x9A,0x9B,0x9C,0x9D,0x9E,
  0x9F,0xA0,0xA1,0xA2,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xA3,0xA4,0xA5,0xA6,0xA7,0xA8,0xA9,0xAA,0xAB,0xAC,0xA3,0xA4,0xA5,0xA6,0xA7,0xA8,
  0xA9,0xAA,0xAB,0xAC,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0xAD,0xAE,0xAF,0xB0,0xB1,0xB2,0xB3,0xB4,0xB5,0xB6,0xAD,0xAE,0xAF,0xB0,0xB1,0xB2,
  0xB3,0xB4,0xB5,0xB6,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x12,0xB7,0xB8,0xB9,0xBA,0xBB,0xBC,0xBD,0xBE,0x12,0x12,0xB7,0xB8,0xB9,0xBA,0xBB,
  0xBC,0xBD,0xBE,0x12,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x12,0xBF,0xC0,0xC1,0xC2,0xC3,0xC4,0xC5,0xC6,0x12,0x12,0xBF,0xC0,0xC1,0xC2,0xC3,
  0xC4,0xC5,0xC6,0x12,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x12,0xC7,0xC8,0x48,0xC9,0xCA,0x48,0xCB,0xCC,0x12,0x12,0xC7,0xC8,0x48,0xC9,0xCA,
  0x48,0xCB,0xCC,0x12,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x12,0x12,0xCD,0xCE,0x48,0x48,0xCF,0xD0,0xD1,0x12,0x12,0x12,0xCD,0xCE,0x48,0x48,
  0xCF,0xD0,0xD1,0x12,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x12,0x12,0xD2,0xD3,0xD4,0x48,0xD5,0xD6,0x12,0x12,0x12,0x12,0xD2,0xD3,0xD4,0x48,
  0xD5,0xD6,0x12,0x12,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00
];

var hw = new gbhw();

var i = 0;

address = hw._SCRN0;
for(i=0; i<map.length; i++) {
	write_vram(address + i, map[i]);
}

address = hw._VRAM;
for(i=0; i<electronoob.length; i++) {
	write_vram(address + i, electronoob[i]);
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
