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
    // Add default value
    targetElement.querySelector('select').value = props.value;
    addEventListeners(props, targetElement);
};

const addEventListeners = (props: GamesSelectProps, targetElement: HTMLElement) => {

    const handler = (e: Event) => {
        props.onChange((<HTMLInputElement>e.target).value);
    };

    targetElement.querySelector('select').removeEventListener('change', handler);
    targetElement.querySelector('select').addEventListener('change', handler);
};

export default GamesSelect;