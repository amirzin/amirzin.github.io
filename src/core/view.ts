import compileTemplate from 'lodash.template';

export const render = (html: string, props: object, targetElement: HTMLElement): void => {
    const template: string = buildTemplate(html, props);
    insertToDOM(template, targetElement);
};

const insertToDOM = (html: string, targetElement: HTMLElement): void => {
    targetElement.innerHTML = html;
};

export const buildTemplate = (template: string, props: object): string => {
    return compileTemplate(template)(props);
};

export const addEventListeners = () => { };