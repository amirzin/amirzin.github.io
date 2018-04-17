import template from './StreamsList.component.html';
import * as view from 'core/view';

interface StreamsListProps {
    streams: string[];
    onStreamClick(channelName: string): void;
    forEach: any
};

const StreamsList = (props: StreamsListProps, targetElement: HTMLElement): void => {
    view.render(template, props, targetElement);
    addEventListeners(props, targetElement);
};

const addEventListeners = (props: StreamsListProps, targetElement: HTMLElement) => {
    targetElement.addEventListener('click', (e) => {
        let el = <HTMLElement>e.target;
        while ((el = el.parentElement) && !el.dataset.element);
        props.onStreamClick(el.dataset.channelName);
    });
};

export default StreamsList; 