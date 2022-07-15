import MyComponent from '../../../../slices/ImageWIthParagraph';

export default {
  title: 'slices/ImageWIthParagraph'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"image_w_ith_paragraph","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"title":[{"type":"heading3","text":"Deploy virtual web services","spans":[]}],"description":[{"type":"paragraph","text":"Consequat do ad sit amet ut qui dolor nisi ipsum consectetur nisi. Duis ipsum eiusmod incididunt aute incididunt aliquip excepteur nostrud.","spans":[]}],"descriptionVerticalAlignCenter":true},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _ImageRight = () => <MyComponent slice={{"variation":"imageRight","name":"ImageRight","slice_type":"image_w_ith_paragraph","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"title":[{"type":"heading3","text":"Harness magnetic ROI","spans":[]}],"description":[{"type":"paragraph","text":"Laboris Lorem eiusmod tempor aliquip sunt amet.","spans":[]}],"descriptionVerticalAlignCenter":false},"id":"_ImageRight"}} />
_ImageRight.storyName = 'ImageRight'
