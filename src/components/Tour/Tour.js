import '../Tour/Tour.scss';
const Tour = ({ tourData, handleDelete, infoHandlerFn }) => {

    return (
        tourData.map((tour)=>(
            <article className="tour">
            <div className="img-container" key={tour.id}>
                <img src={tour.img} alt="" />
                <button className="close-btn" onClick={()=> handleDelete(tour.id)}>X</button>
            </div>
            <div className="tour-info">
                <h3>{tour.city}</h3>
                <h4>{tour.name}</h4>
                <h5>info
                    <span><i onClick={()=>infoHandlerFn(tour.id,tour.flag)} className="fas fa-caret-square-down"></i></span>
                </h5>
                <p>{tour.flag && tour.info}</p>
            </div>
        </article>
        ))
    )
};

export default Tour;