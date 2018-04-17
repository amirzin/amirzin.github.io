declare var Twitch: any;

const Player = () => {
    return new Twitch.Player("twitch-embed", {
        width: '100%',
        height: 800,

        chat: 'mobile',
        layout: 'video',
        autoplay: false
    });
};

export default Player;