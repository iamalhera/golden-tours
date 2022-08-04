import Tour from '../Tour/Tour';
import './TourList.scss' ;
import tourData from "../../data/tourData" ;
import {useState} from 'react' ;

const TourList = () => {
    const data = tourData ;
    const [tourList, setTourList] = useState(data) ;
    // console.log(tourData) ;
    const handleDeleteFn = (id) =>{
        const newTourList = tourList.filter(tour => tour.id !== id) ;
        setTourList(newTourList) ;
    }
    const handleInfoFn = (id,flag) =>{
        const newTourList = tourList.map(tour =>{
            if(tour.id === id){
                tour.flag = !flag ;
            }
            return tour
        } )
        setTourList(newTourList);
    }
    return (
        <section className="tourlist">
            <Tour tourData={tourList} handleDelete={handleDeleteFn} infoHandlerFn={handleInfoFn}/>
        </section>
     );
}
 
export default TourList;