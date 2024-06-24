import React, {FC, useState} from 'react';

interface IProps{
    children: React.ReactNode;
}



const ChangingColorButton: FC<IProps> = ({children}) => {

    const generateSixDigitNumber = (): number => {
        return Math.floor(100000 + Math.random() * 900000);
    };

    const [color, setColor] = useState<string>('white');

    const ClickHandler = () => {
        // setColor(prevColor => (prevColor === 'white'? `#${generateSixDigitNumber()}`:'white'));
        setColor(`#${generateSixDigitNumber()}`)
    };

    return (
        <button onClick={() => {ClickHandler()}}
        style={{backgroundColor: color}}>
            {children}
        </button>
    );
};

export default ChangingColorButton;