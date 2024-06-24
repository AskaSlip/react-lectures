import React, {FC} from 'react';
import styles from './SouthParkModule.module.css'

interface IProps {
    name: string;
    lastname:string;
    img:string;
    // children?: React.ReactNode;
}

type PropsWithChildren<T> = T & { children?: React.ReactNode };

const SouthParkModule: FC<PropsWithChildren<IProps>> = ({children,name, lastname,img}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{lastname}</h3>
            <img className={styles.w200}
                src={img} alt={lastname}/>
            <p>{children}</p>
        </div>
    );
};

export default SouthParkModule;