export const getStreams = (gameName: string = 'Dota 2'): Promise<object> => {
    let streamsRequest = new Request(`https://api.twitch.tv/kraken/streams/?game=${gameName}`, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': 'pyoldk5odp2yw4nrhbpd6s5qmq2grb'
        }),
        mode: 'cors',
        cache: 'default'
    });

    return fetch(streamsRequest)
        .then(res => res.json())
};