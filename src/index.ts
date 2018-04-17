import template from 'lodash.template';
import forEach from 'lodash.foreach';
import * as view from './core/view';

import Player from 'components/Player/Player.component';
import GamesSelect from 'components/GamesSelect/GamesSelect.component';
import StreamsList from 'components/StreamsList/StreamsList.component';


let player = Player();

let getGamesRequest = new Request('https://api.twitch.tv/helix/games/top', {
    method: 'GET',
    headers: new Headers({
        'Client-ID': 'pyoldk5odp2yw4nrhbpd6s5qmq2grb'
    }),
    mode: 'cors',
    cache: 'default'
});

fetch(getGamesRequest)
    .then(res => res.json())
    .then(json => {
        GamesSelect(
            { 'games': json.data, value: 'Dota 2', forEach, onChange: getStreamsAndRender },
            (<HTMLInputElement>document.getElementById('gamesSelect'))
        );
    });

const getStreamsAndRender = (gameName: string = 'Dota 2') => {
    let streamsRequest = new Request(`https://api.twitch.tv/kraken/streams/?game=${gameName}`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': 'pyoldk5odp2yw4nrhbpd6s5qmq2grb'
        }),
        mode: 'cors',
        cache: 'default'
    });

    fetch(streamsRequest)
        .then(res => res.json())
        .then(json => {

            const onStreamClick = (channelName: string): void => {
                player.setChannel(channelName);
                player.play();
            };

            const streamsTable = document.getElementById('streamsTable')
            StreamsList({ streams: json.streams, onStreamClick, forEach }, streamsTable);
        });
};

getStreamsAndRender();