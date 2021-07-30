import { useEffect, useState } from 'react';

const AnimateProgressBar = (props) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setValue((value + 1) % props.values.length);
        }, 1);
    }, []);

    return props.children(props.values[value]);
};
export default AnimateProgressBar;
