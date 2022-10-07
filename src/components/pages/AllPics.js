import classes from './css/AllPics.module.css';

import Anvitha_1 from '../../assets/images/anvitha_1.jpeg';
import Anvitha_2 from '../../assets/images/anvitha_2.jpeg';
import Anvitha_3 from '../../assets/images/anvitha_3.jpeg';
import Anvitha_4 from '../../assets/images/anvitha_4.jpeg';
import Anvitha_5 from '../../assets/images/anvitha_5.jpeg';
import Anvitha_6 from '../../assets/images/anvitha_6.jpeg';
import Disha_1 from '../../assets/images/disha_1.jpeg';
import Disha_2 from '../../assets/images/disha_2.jpeg';
import Group_1 from '../../assets/images/group_1.jpeg';
import Group_2 from '../../assets/images/group_2.jpeg';
import Group_3 from '../../assets/images/group_3.jpeg';
import Group_4 from '../../assets/images/group_4.jpeg';
import Group_5 from '../../assets/images/group_5.jpeg';
import Group_6 from '../../assets/images/group_6.jpeg';
import Group_9 from '../../assets/images/group_9.jpeg';
import Parnika_1 from '../../assets/images/parnika_1.jpeg';
import Parnika_2 from '../../assets/images/parnika_2.jpeg';
import Mirjan_1 from '../../assets/images/mirjan_1.jpeg';
import Mirjan_2 from '../../assets/images/mirjan_2.jpeg';
import Mirjan_3 from '../../assets/images/mirjan_3.jpeg';
import Mirjan_4 from '../../assets/images/mirjan_4.jpeg';
import Tanuj_1 from '../../assets/images/tanuj_1.jpg';
import Tanuj_5 from '../../assets/images/tanuj_5.jpeg';
import Yana_1 from '../../assets/images/yana_1.jpeg';
import Yana_2 from '../../assets/images/yana_2.jpeg';
import Yana_3 from '../../assets/images/yana_3.jpeg';
import Yana_4 from '../../assets/images/yana_4.jpeg';


const AllPics = () => {
    return (
    <div className={classes.allPicsContainer}>
        <div className={classes.picsRowContainer}>
            <div className={`${classes.imageContainer1} ${classes.imageContainer}`}>
                <img src={Anvitha_1} alt="Anvitha"/>
                <img src={Group_1} alt="Group_1"/>
                <img src={Anvitha_3} alt="Anvitha"/>
                <img src={Group_3} alt="Disha_1"/>
                <img src={Group_5} alt="Anvitha"/>
            </div>
            <div className={`${classes.imageContainer2} ${classes.imageContainer}`}>
                <img src={Disha_2} alt="Disha_1"/>
                <img src={Parnika_1} alt="Disha_2"/>
                <img src={Group_2} alt="Group_2"/>
                <img src={Group_4} alt="Disha_1"/>
                <img src={Disha_1} alt="Anvitha"/>
                <img src={Tanuj_1} alt="Anvitha"/>
            </div>
        </div>
        <div className={`${classes.imageContainer3} ${classes.imageContainerVertical}`}>
            <img src={Anvitha_2} alt="Anvitha_2"/>
        </div>
        <div className={classes.picsRowContainer}>
            <div className={`${classes.imageContainer4} ${classes.imageContainer}`}>
                <img src={Parnika_2} alt="Parnika_2"/>
                <img src={Mirjan_1} alt="Mirjan_1"/>
                <img src={Anvitha_6} alt="Anvitha_6"/>
            </div>
            <div className={`${classes.imageContainer5} ${classes.imageContainer}`}>
                <img src={Yana_1} alt="Yana_1"/>
                <img src={Tanuj_5} alt="Tanuj_5"/>
                <img src={Yana_4} alt="Yana_4"/>
            </div>
        </div>
        <div className={`${classes.imageContainer6} ${classes.imageContainerVertical}`}>
            <img src={Group_6} alt="Group_6"/>
        </div>
    </div>
    );
};

export default AllPics;