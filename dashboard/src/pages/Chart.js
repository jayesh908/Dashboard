import React from 'react'
import ch from '../ch.png'
import ch3 from '../ch3.png'
import ch4 from '../ch4.png'
import ch1 from '../ch1.png'
const Chart = () => {
    return (
        
        <div className="container text-start py-5">
            <div className="row align-items-center g-3">
                <div class="col-lg-6">
                    <div className='card'>
                        <div className='card-header'>
                            Doughtnut-Chart
                        </div>
                        <div className='card-body'>
                        <img src={ch} alt='a chart' className='img-fluid'></img>
                        </div>  
                    </div>
                  
                </div>
                <div class="col-lg-6">
                    <div className='card'>
                        <div className='card-header'>
                            Pie-Chart
                        </div>
                        <div className='card-body'>
                        <img src={ch1} alt='a chart' className='img-fluid'></img>
                        </div>  
                    </div>
                  
                </div>
                <div class="col-lg-6">
                    <div className='card'>
                        <div className='card-header'>
                            Polar Area Chart
                        </div>
                        <div className='card-body'>
                        <img src={ch3} alt='a chart' className='img-fluid'></img>
                        </div>  
                    </div>
                  
                </div>
                <div class="col-lg-6">
                    <div className='card'>
                        <div className='card-header'>
                            Radar-Chart
                        </div>
                        <div className='card-body'>
                        <img src={ch4} alt='a chart' className='img-fluid'></img>
                        </div>  
                    </div>
                  
                </div>

            </div>
        </div>
    );
}
export default Chart