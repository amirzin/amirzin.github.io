export const getVideos = (userId: string): Promise<object> => {
    let streamsRequest = new Request(`https://api.twitch.tv/helix/videos?user_id=${userId}`, {
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