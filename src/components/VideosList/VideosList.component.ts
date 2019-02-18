import template from './VideosList.component.html';
import * as view from 'core/view';

interface VideosListProps {
    videos: object[];
    onVideoClick(videoId: string): void;
    forEach: any
};

const VideosList = (props: VideosListProps, targetElement: HTMLElement): void => {
    view.render(template, props, targetElement);
    addEventListeners(props, targetElement);
};

const addEventListeners = (props: VideosListProps, targetElement: HTMLElement) => {

    const handler = (e: Event) => {
        let el = <HTMLElement>e.target;
        while ((el = el.parentElement) && !el.dataset.element);
        props.onVideoClick(el.dataset.videoId);
        e.preventDefault();
        return false;
    };

    targetElement.removeEventListener('click', handler);
    targetElement.addEventListener('click', handler);
};

export default VideosList; 