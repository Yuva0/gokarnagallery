import classes from './css/MainPic.module.css';

import Anvitha_1 from '../../assets/images/anvitha_1.jpeg';

const MainPic = () => {
    return (
        <div className={classes.mainPicContainer}><img src={Anvitha_1} alt="Anvitha"/></div>
    );
};

export default MainPic;