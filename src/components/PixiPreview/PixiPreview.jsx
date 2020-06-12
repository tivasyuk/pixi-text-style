import React from 'react';
import {PixiComponent} from '@inlet/react-pixi';
import {Text} from 'pixi.js';

const PixiPreview = ({styles}) => {
    let {textValue, ...style} = styles;

    const PixiText = PixiComponent('PixiText', {
        create: props => new Text(props)
    });

    return (
        <PixiText text={textValue} style={style} />
    )
};

export default PixiPreview;