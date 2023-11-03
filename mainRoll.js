export function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export function createMainCard(svg, descriptionDiv) {
    const mainCardContainer = document.getElementById('large-svg-container');
    const mainCardDescription = document.getElementById('card-description');
    clear(mainCardContainer);
    clear(mainCardDescription);

    const currentSvg = svg.cloneNode(true);
    currentSvg.setAttribute('height', '250px');
    const mainDescriptionDiv = descriptionDiv.cloneNode(true);
    mainCardContainer.appendChild(currentSvg);
    mainCardDescription.appendChild(mainDescriptionDiv);

    const mainContainer = document.querySelector('.main-container');
    const pianoRollContainer = document.getElementById('pianoRollContainer');
    const mainCard = document.querySelector('.main-card');

    mainCard.style.cssText = 'margin: 20px; padding: 20px; height: 350px;';
    mainCardContainer.style.cssText = 'padding: 5px'
    mainCardDescription.style.cssText = 'padding: 5px'
    mainContainer.style.cssText = 'grid-template-columns: 2fr 1fr; grid-column-gap: 20px;';
    pianoRollContainer.style.cssText = 'grid-template-columns: 1fr';

    return { mainCardContainer, cardDescription: mainCardDescription }
}