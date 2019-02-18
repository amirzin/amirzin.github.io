import template from 'lodash.template';
import forEach from 'lodash.foreach';
import * as view from './core/view';

import { getStreams } from 'actions/streams.actions';
import { getVideos } from 'actions/videos.actions';

import Player from 'components/Player/Player.component';
import GamesSelect from 'components/GamesSelect/GamesSelect.component';
import StreamsList from 'components/StreamsList/StreamsList.component';
import VideosList from 'components/VideosList/VideosList.component';


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
            (<HTMLInputElement>document.getElementById('gamesSelectContainer'))
        );
    });

interface StreamsJson {
    streams: object[]
}

const getStreamsAndRender = (gameName: string = 'Dota 2') => {
    getStreams(gameName).then((json: StreamsJson) => {
        const onStreamClick = (channelName: string, channelId: string): void => {
            player.setChannel(channelName);
            player.play();
            getVideosAndRender(channelId);
        };

        const streamsTable = document.getElementById('streamsTable')
        StreamsList({ streams: json.streams, onStreamClick, forEach }, streamsTable);
    });
};

interface VideosJSON {
    data: object[]
}

const getVideosAndRender = (channelId: string) => {
    getVideos(channelId).then((json: VideosJSON) => {
        const videosDiv = document.getElementById('videos')
        const onVideoClick = (videoId: string): void => {
            player.setVideo('v' + videoId, 0);
            player.play();
        };
        VideosList({ videos: json.data, onVideoClick, forEach }, videosDiv);
    });
};

getStreamsAndRender();