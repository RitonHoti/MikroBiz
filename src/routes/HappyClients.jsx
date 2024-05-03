import classes from "./HappyClients.module.css";
import personImg from '../assets/Person.png';

function HappyClients() {
  return (
    <>
      <div className={classes.Happycontent}>
        <div className={classes.firstClient}>
            <img src={personImg}/>
            <h1>Filan Fisteku</h1>
            <p>This is description...</p>
      </div>
      <div className={classes.secondClient}>
            <img src={personImg}/>
            <h1>Filan Fisteku</h1>
            <p>...This is description</p>
      </div>
      <div className={classes.thirdClient}>
            <img src={personImg}/>
            <h1>Filan Fisteku</h1>
            <p>This is description...</p>
      </div>
      </div>
    </>
  );
}

export default HappyClients;
