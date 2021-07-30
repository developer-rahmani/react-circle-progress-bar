import { useEffect, useRef, useState } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import AnimateProgressBar from './AnimateProgressBar';

import 'react-circular-progressbar/dist/styles.css';
import './../styles/circleProgressBar.scss';

import fakeData from './../data.json';

const CircleProgress = () => {
    const refProgress = useRef();
    const [posProgress, setPosProgress] = useState();
    const [posScroll, setPosScroll] = useState();

    useEffect(() => {
        window.addEventListener('scroll', (e) => showProgress());
        const showProgress = () => {
            setPosProgress(refProgress.current.offsetTop - window.innerHeight);
            setPosScroll(window.pageYOffset - 50);
        };
        showProgress();
    }, []);

    return (
        <>
            <h1>Scroll Down :)</h1>
            <div className="container-progress" ref={refProgress} style={{ marginTop: '100vh' }}>
                {fakeData.map((item, index) => (
                    <div key={index} className="itemProgress">
                        <AnimateProgressBar values={[0, item]}>
                            {(percentage) => {
                                return <CircularProgressbar value={posScroll >= posProgress ? percentage.number : ''} text={posScroll >= posProgress ? percentage.number + '%' : ''} />;
                            }}
                        </AnimateProgressBar>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CircleProgress;
