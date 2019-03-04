"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sound_player_1 = require("./sound-player");
var SoundPlayerConsumer = /** @class */ (function () {
    function SoundPlayerConsumer() {
        this.soundPlayer = new sound_player_1.default();
    }
    SoundPlayerConsumer.prototype.playSomethingCool = function () {
        var coolSoundFileName = 'song.mp3';
        this.soundPlayer.playSoundFile(coolSoundFileName);
    };
    return SoundPlayerConsumer;
}());
exports.default = SoundPlayerConsumer;
