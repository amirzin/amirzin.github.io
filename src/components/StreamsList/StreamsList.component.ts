import template from './StreamsList.component.html';
import * as view from 'core/view';

interface StreamsListProps {
    streams: object[];
    onStreamClick(channelName: string, channelId: string): void;
    forEach: any
};

const StreamsList = (props: StreamsListProps, targetElement: HTMLElement): void => {
    view.render(template, props, targetElement);
    addEventListeners(props, targetElement);
};

const addEventListeners = (props: StreamsListProps, targetElement: HTMLElement) => {

    const handler = (e: Event) => {
        let el = <HTMLElement>e.target;
        while ((el = el.parentElement) && !el.dataset.element);
        props.onStreamClick(el.dataset.channelName, el.dataset.channelId);
    };

    targetElement.removeEventListener('click', handler);
    targetElement.addEventListener('click', handler);
};

export default StreamsList; 