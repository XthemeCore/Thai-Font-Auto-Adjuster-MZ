//=============================================================================
// Thai Font Automatic Adjuster
//=============================================================================
/*:
 * @target MZ
 * @plugindesc ปรับตัวอักษรภาษาไทยไปตามยถากรรม
 * License: MIT License
 * @author XthemeCore
 *
 * @help ThaiFontAutoAdjuster.js
 *
 * ปลั๊กอินนี้จะปรับตัวอักษรภาษาไทยให้เป็นไปตามยถากรรม
 * การแสดงผลจะตรงกับที่แสดงในหน้าจอเริ่มเกมและเมนูต่างๆ 
 */
(()=>{"use strict";Utils.containsThaiSpecialCharacters=function(e){return/[ำิีึืัํ่้๊๋์ฺุู็ๅ]/.test(e)};const s=Window_Base.prototype.processCharacter;Window_Base.prototype.processCharacter=function(e){var t=e.text[e.index],i=e.text[e.index+1],a=e.text[e.index+2];Utils.containsThaiSpecialCharacters(i)&&(e.buffer+=t,Utils.containsThaiSpecialCharacters(a)&&(e.buffer+=i,e.index++),e.index++),s.apply(this,arguments)};const n=Window_Message.prototype.processCharacter;Window_Message.prototype.processCharacter=function(e){var t=e.text[e.index],i=e.text[e.index+1],a=e.text[e.index+2];if(this.isShakingActive&&this.isShakingActive()&&!this._checkWordWrapMode){if(Imported.YEP_MessageCore&&this.checkWordWrap(e))return this.processNewLine(e);var s=t;"\n"!==s?Utils.containsThaiSpecialCharacters(i)&&(s+=i,Utils.containsThaiSpecialCharacters(a)&&(s+=a,e.index++)):(e.x=e.startX,e.y+=e.height),e.index++;var r=this.textWidth(s),c=e.height;this.createShakingCharacter(e,s,r,c),e.x+=r}else Utils.containsThaiSpecialCharacters(i)&&(e.buffer+=t,Utils.containsThaiSpecialCharacters(a)&&(e.buffer+=i,e.index++),e.index++),n.call(this,e)}})();
