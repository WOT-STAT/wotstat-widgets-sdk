
export type KeyCodes =
  'MODIFIER_SHIFT' |
  'MODIFIER_CTRL' |
  'MODIFIER_ALT' |
  'KEY_NOT_FOUND' |
  'KEY_NONE' |
  'KEY_NULL' |
  'KEY_ESCAPE' |
  'KEY_1' |
  'KEY_2' |
  'KEY_3' |
  'KEY_4' |
  'KEY_5' |
  'KEY_6' |
  'KEY_7' |
  'KEY_8' |
  'KEY_9' |
  'KEY_0' |
  'KEY_MINUS' |
  'KEY_EQUALS' |
  'KEY_BACKSPACE' |
  'KEY_TAB' |
  'KEY_Q' |
  'KEY_W' |
  'KEY_E' |
  'KEY_R' |
  'KEY_T' |
  'KEY_Y' |
  'KEY_U' |
  'KEY_I' |
  'KEY_O' |
  'KEY_P' |
  'KEY_LBRACKET' |
  'KEY_RBRACKET' |
  'KEY_RETURN' |
  'KEY_LCONTROL' |
  'KEY_A' |
  'KEY_S' |
  'KEY_D' |
  'KEY_F' |
  'KEY_G' |
  'KEY_H' |
  'KEY_J' |
  'KEY_K' |
  'KEY_L' |
  'KEY_SEMICOLON' |
  'KEY_APOSTROPHE' |
  'KEY_GRAVE' |
  'KEY_LSHIFT' |
  'KEY_BACKSLASH' |
  'KEY_Z' |
  'KEY_X' |
  'KEY_C' |
  'KEY_V' |
  'KEY_B' |
  'KEY_N' |
  'KEY_M' |
  'KEY_COMMA' |
  'KEY_PERIOD' |
  'KEY_SLASH' |
  'KEY_RSHIFT' |
  'KEY_NUMPADSTAR' |
  'KEY_LALT' |
  'KEY_SPACE' |
  'KEY_CAPSLOCK' |
  'KEY_F1' |
  'KEY_F2' |
  'KEY_F3' |
  'KEY_F4' |
  'KEY_F5' |
  'KEY_F6' |
  'KEY_F7' |
  'KEY_F8' |
  'KEY_F9' |
  'KEY_F10' |
  'KEY_NUMLOCK' |
  'KEY_SCROLL' |
  'KEY_NUMPAD7' |
  'KEY_NUMPAD8' |
  'KEY_NUMPAD9' |
  'KEY_NUMPADMINUS' |
  'KEY_NUMPAD4' |
  'KEY_NUMPAD5' |
  'KEY_NUMPAD6' |
  'KEY_ADD' |
  'KEY_NUMPAD1' |
  'KEY_NUMPAD2' |
  'KEY_NUMPAD3' |
  'KEY_NUMPAD0' |
  'KEY_NUMPADPERIOD' |
  'KEY_OEM_102' |
  'KEY_F11' |
  'KEY_F12' |
  'KEY_F13' |
  'KEY_F14' |
  'KEY_F15' |
  'KEY_KANA' |
  'KEY_ABNT_C1' |
  'KEY_CONVERT' |
  'KEY_NOCONVERT' |
  'KEY_YEN' |
  'KEY_ABNT_C2' |
  'KEY_NUMPADEQUALS' |
  'KEY_PREVTRACK' |
  'KEY_AT' |
  'KEY_COLON' |
  'KEY_UNDERLINE' |
  'KEY_KANJI' |
  'KEY_STOP' |
  'KEY_AX' |
  'KEY_UNLABELED' |
  'KEY_NEXTTRACK' |
  'KEY_NUMPADENTER' |
  'KEY_RCONTROL' |
  'KEY_MUTE' |
  'KEY_CALCULATOR' |
  'KEY_PLAYPAUSE' |
  'KEY_MEDIASTOP' |
  'KEY_VOLUMEDOWN' |
  'KEY_VOLUMEUP' |
  'KEY_WEBHOME' |
  'KEY_NUMPADCOMMA' |
  'KEY_NUMPADSLASH' |
  'KEY_SYSRQ' |
  'KEY_RALT' |
  'KEY_PAUSE' |
  'KEY_HOME' |
  'KEY_UPARROW' |
  'KEY_PGUP' |
  'KEY_LEFTARROW' |
  'KEY_RIGHTARROW' |
  'KEY_END' |
  'KEY_DOWNARROW' |
  'KEY_PGDN' |
  'KEY_INSERT' |
  'KEY_DELETE' |
  'KEY_LWIN' |
  'KEY_RWIN' |
  'KEY_APPS' |
  'KEY_POWER' |
  'KEY_SLEEP' |
  'KEY_WAKE' |
  'KEY_WEBSEARCH' |
  'KEY_WEBFAVORITES' |
  'KEY_WEBREFRESH' |
  'KEY_WEBSTOP' |
  'KEY_WEBFORWARD' |
  'KEY_WEBBACK' |
  'KEY_MYCOMPUTER' |
  'KEY_MAIL' |
  'KEY_MEDIASELECT' |
  'KEY_IME_CHAR' |
  'KEY_MOUSE0' |
  'KEY_LEFTMOUSE' |
  'KEY_MOUSE1' |
  'KEY_RIGHTMOUSE' |
  'KEY_MOUSE2' |
  'KEY_MIDDLEMOUSE' |
  'KEY_MOUSE3' |
  'KEY_MOUSE4' |
  'KEY_MOUSE5' |
  'KEY_MOUSE6' |
  'KEY_MOUSE7' |
  'KEY_JOY0' |
  'KEY_JOY1' |
  'KEY_JOY2' |
  'KEY_JOY3' |
  'KEY_JOY4' |
  'KEY_JOY5' |
  'KEY_JOY6' |
  'KEY_JOY7' |
  'KEY_JOY8' |
  'KEY_JOY9' |
  'KEY_JOY10' |
  'KEY_JOY11' |
  'KEY_JOY12' |
  'KEY_JOY13' |
  'KEY_JOY14' |
  'KEY_JOY15' |
  'KEY_JOY16' |
  'KEY_JOY17' |
  'KEY_JOY18' |
  'KEY_JOY19' |
  'KEY_JOY20' |
  'KEY_JOY21' |
  'KEY_JOY22' |
  'KEY_JOY23' |
  'KEY_JOY24' |
  'KEY_JOY25' |
  'KEY_JOY26' |
  'KEY_JOY27' |
  'KEY_JOY28' |
  'KEY_JOY29' |
  'KEY_JOY30' |
  'KEY_JOY31' |
  'KEY_JOYDUP' |
  'KEY_JOYDDOWN' |
  'KEY_JOYDLEFT' |
  'KEY_JOYDRIGHT' |
  'KEY_JOYSTART' |
  'KEY_JOYSELECT' |
  'KEY_JOYBACK' |
  'KEY_JOYALPUSH' |
  'KEY_JOYARPUSH' |
  'KEY_JOYCROSS' |
  'KEY_JOYA' |
  'KEY_JOYCIRCLE' |
  'KEY_JOYB' |
  'KEY_JOYSQUARE' |
  'KEY_JOYX' |
  'KEY_JOYTRIANGLE' |
  'KEY_JOYY' |
  'KEY_JOYL1' |
  'KEY_JOYBLACK' |
  'KEY_JOYR1' |
  'KEY_JOYWHITE' |
  'KEY_JOYL2' |
  'KEY_JOYLTRIGGER' |
  'KEY_JOYR2' |
  'KEY_JOYRTRIGGER' |
  'KEY_JOYAHARD' |
  'KEY_JOYBHARD' |
  'KEY_JOYXHARD' |
  'KEY_JOYYHARD' |
  'KEY_JOYBLACKHARD' |
  'KEY_JOYWHITEHARD' |
  'KEY_JOYLTRIGGERHARD' |
  'KEY_JOYRTRIGGERHARD' |
  'KEY_JOYALUP' |
  'KEY_JOYALDOWN' |
  'KEY_JOYALLEFT' |
  'KEY_JOYALRIGHT' |
  'KEY_JOYARUP' |
  'KEY_JOYARDOWN' |
  'KEY_JOYARLEFT' |
  'KEY_JOYARRIGHT' |
  'KEY_DEBUG' |
  'KEY_LCDKB_LEFT' |
  'KEY_LCDKB_RIGHT' |
  'KEY_LCDKB_OK' |
  'KEY_LCDKB_CANCEL' |
  'KEY_LCDKB_UP' |
  'KEY_LCDKB_DOWN' |
  'KEY_LCDKB_MENU' |
  'AXIS_LX' |
  'AXIS_LY' |
  'AXIS_RX' |
  'AXIS_RY'
