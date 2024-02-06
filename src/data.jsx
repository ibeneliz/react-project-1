import componentImg from './assets/components.png';
import jsxImg from './assets/jsx-ui.png';
import propsImg from './assets/config.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS =[
    {
        image : componentImg,
        title : 'Components',
        description : 'The core UI building block - compose the user interface by combining multiple components.'
    },
    {
        image : jsxImg,
        title : 'JSX',
        description : 'Return (potentially dynamic) HTML(ish) cide to define the actual markup that needs to be rendered.'
    },
    {
        image : propsImg,
        title : 'Props',
        description : 'Props makes components configurable(and therefore reusable) by passing input data to them.'
    },
    {
        image : stateImg,
        title : 'State',
        description : 'React-managed data which, when changed causes the component to re-render and the UI to update.'
    }
]