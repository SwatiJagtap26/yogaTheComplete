
import './advertise.css';
const Advertise =(props) =>{
return(
    <div>
         <div className="Container1">
        <div className="subContainer1">
          <p className="subheading1">Welcome to Yoga Asanas</p>
          <h1 className="heading1">Yoga Enhances Your Life</h1>
          <p>{props.title}</p>
         
          
        </div>
      </div>
    </div>
)
}
export default Advertise;