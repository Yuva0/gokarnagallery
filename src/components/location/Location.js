import classes from './css/Location.module.css';
import Group_4 from '../../assets/images/group_4.jpeg';

const Location = () => {
    return (
        <div className={classes.locationContainer}>
            <div className={classes.locationItemContainer}>
                <img src={Group_4}/>
                <div className={classes.locationItemText}>Mirjan Fort</div>
            </div>
            <div className={classes.locationItemContainer}>
                <img src={Group_4}/>
                <div className={classes.locationItemText}>Yana Caves</div>
            </div>
            <div className={classes.locationItemContainer}>
                <img src={Group_4}/>
                <div className={classes.locationItemText}>Ganesh Beach</div>
            </div>
            <div className={classes.locationItemContainer}>
                <img src={Group_4}/>
                <div></div>
            </div>
            <div className={classes.locationItemContainer}>
                <img src={Group_4}/>
                <div></div>
            </div>
            <div className={classes.locationItemContainer}>
                <img src={Group_4}/>
                <div></div>
            </div>
        </div>
    );
};

export default Location;