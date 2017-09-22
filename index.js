const soundPlayer = require('play-sound')();
const path = require('path');
const isWindows = process.platform === 'win32';

class jestFuck {
    constructor() {
        this.fuck = path.join(path.resolve(__dirname), 'misc/fuck.wav');
    }

    playSound(sound) {
        soundPlayer.play(sound, function(err) {
            if (err && isWindows) {
                console.log('You are running windows. You need \'mplayer\' installed for jest-fuck to work properly.');
                console.log('See https://www.npmjs.com/package/play-sound');
            } else if (err) {
                console.log(err);
            }
        });
    }

    onRunComplete(contexts, results) {
        if (!results.numTotalTests || !results.numFailedTests) {
            this.playSound(this.fuck);
        }
    }
}

module.exports = jestFuck;
