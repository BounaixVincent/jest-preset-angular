"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoundPlayer = /** @class */ (function () {
    function SoundPlayer() {
        this.foo = 'bar';
    }
    SoundPlayer.prototype.playSoundFile = function (fileName) {
        console.log('Playing sound file' + fileName);
    };
    return SoundPlayer;
}());
exports.default = SoundPlayer;
