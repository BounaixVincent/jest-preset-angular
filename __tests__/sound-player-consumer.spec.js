import SoundPlayer, {mockPlaySoundFile, mock} from '../__mocks__/sound-player';
import SoundPlayerConsumer from '../src/sound-player-consumer';
jest.mock('../src/sound-player'); // SoundPlayer is now a mock constructor

describe('Manual Mock', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        SoundPlayer.mockClear();
        mockPlaySoundFile.mockClear();
    });

    it('can check if the consumer called the class constructor', () => {
        const soundPlayerConsumer = new SoundPlayerConsumer();
        expect(SoundPlayer).toHaveBeenCalledTimes(1);
    });

    it('can check if the consumer called a method on the class instance', () => {
        const soundPlayerConsumer = new SoundPlayerConsumer();
        const coolSoundFileName = 'song.mp3';
        soundPlayerConsumer.playSomethingCool();
        expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
    });
});