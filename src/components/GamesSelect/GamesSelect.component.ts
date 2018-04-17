import template from './GamesSelect.component.html';
import * as view from 'core/view';

interface GamesSelectProps {
    games: string[],
    value: string,
    onChange: (selectedGame: string) => void
    forEach: any
}

const GamesSelect = (props: GamesSelectProps, targetElement: HTMLInputElement) => {
    view.render(template, props, targetElement);
    targetElement.value = props.value;
    addEventListeners(props, targetElement);
};

const addEventListeners = (props: GamesSelectProps, targetElement: HTMLElement) => {
    targetElement.addEventListener('change', (e) => {
        /* let el = <HTMLElement>e.target;
        while ((el = el.parentElement) && !el.dataset.element);
        props.onStreamClick(el.dataset.channelName); */
        props.onChange((<HTMLInputElement>e.target).value);
    });
};

export default GamesSelect;