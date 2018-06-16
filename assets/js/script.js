const fontsItems = [
    {
        name: 'AdobeVFPrototype',
        url: 'assets/fonts/AdobeVFPrototype/AdobeVFPrototype.ttf',
        variants: [
            'Weight',
            'Contrast'
        ]
    },
    {
        name: 'AvenirNext',
        url: 'assets/fonts/AvenirNext/AvenirNext_Variable.ttf',
        variants: [
            'Weight',
            'Width'
        ]
    },
    {
        name: 'Amstelvar VF',
        url: 'assets/fonts/AmstelvarAlpha/AmstelvarAlpha-VF.ttf',
        variants: [
            'Weight',
            'Width',
            'Optical Size',
            'Grade'
        ]
    },
    {
        name: 'Decovar',
        url: 'assets/fonts/Decovar/DecovarAlpha-VF.ttf',
        variants: [
            'Weight',
        ]
    },
    {
        name: 'dT_Jakob',
        url: 'assets/fonts/dT_Jakob_VariableConcept/dTJakobVariableConceptGX.ttf',
        variants: [
            'Weight'
        ]
    },
  //   font-family: 'FF Meta VF';
  // src: url('https://variablefonts.monotype.com/MetaVariableDemo-Set.woff2') format('woff2');
  // font-display: swap;
  // font-style: normal italic;
  // font-weight: 100 900;
    {
        name: 'FF Meta VF',
        urlExternal: 'https://variablefonts.monotype.com/MetaVariableDemo-Set.woff2',
        variants: [
            'Weight',
            'Width',
            'Italic',
        ],
        format: 'woff2'
    },
    {
        name: 'Gingham',
        url: 'assets/fonts/Gingham/Gingham.ttf',
        variants: [
            'Weight',
            'Width'
        ]
    },
    {
        name: 'KairosSans',
        url: 'assets/fonts/KairosSans/KairosSans_Variable.ttf',
        variants: [
            'Weight',
            'Width',
            'Italic'
        ]
    },
    {
        name: 'Slovic',
        url: 'assets/fonts/Slovic/Variable/Slovic_Demo_VarGX.ttf',
        variants: [
            'Style'
        ]
    },
    {
        name: 'VotoSerif',
        url: 'assets/fonts/VotoSerif/VotoSerifGX.ttf',
        variants: [
            'Weight',
            'Width',
            'Optical Size'
        ]
    },
];

const fonts = document.querySelector('.fonts');

const fontsList = document.createElement('ul');
fontsList.classList.add('fonts__list');
const fontsItem = document.createElement('li');
fontsItem.classList.add('fonts__item');
const fontsTitle = document.createElement('h3');
fontsTitle.classList.add('fonts__title');
const fontsDesc = document.createElement('div');
fontsDesc.classList.add('fonts__desc');
const fontsCode = document.createElement('textarea');
fontsCode.classList.add('fonts__code');
const fontsStyles = document.createElement('style');

console.log(fontsList, fontsItem);

fontsItems.forEach(font => {
    const item = fontsItem.cloneNode(true);
    const itemTitle = fontsTitle.cloneNode(true);
    const itemCode = fontsCode.cloneNode(true);
    const itemDesc = fontsDesc.cloneNode(true);

    itemTitle.innerHTML = font.name;
    itemTitle.style['font-family'] = font.name;
    const fontUrl = font.urlExternal ? font.urlExternal : `https://yoksel.github.io/variable-fonts/${font.url}`;
    const fontFormat = font.format ? font.format : 'truetype';

    const itemStyles = `@font-face {
        font-family: ${font.name};
        font-display: swap;
        src: url(${fontUrl}) format("${fontFormat}");
    }`;
    fontsStyles.innerHTML += `${itemStyles}\n`;
    itemCode.value = itemStyles;
    itemDesc.innerHTML = font.variants ? font.variants.join(' ,') : '';

    item.appendChild(itemTitle);
    item.appendChild(itemDesc);
    item.appendChild(itemCode);

    fontsList.appendChild(item);
})

document.head.appendChild(fontsStyles);
fonts.appendChild(fontsList);

// jvWghtRangeInput.addEventListener('input', function() {
//     dTJakobText.style['font-variation-settings'] = `"wght" ${this.value}`;
// });

//# sourceMappingURL=script.js.map
