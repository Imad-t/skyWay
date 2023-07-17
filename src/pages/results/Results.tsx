import Commodities from "./Commodities";
import Filter from "./Filter";
import Schedule from "./Schedule";
import "./filter.css";


const Results = () => {
  
    return (
        <div className=" pt-20 min-h-screen bg-gray-50">

            <div className='grid grid-cols-10 h-full'>

               <div className="col-span-2  border-r border-gray-400 pb-6">
                <Filter/>
               </div>

                <div className='col-span-5 border-r border-gray-400 p-8'>
                    <Schedule /><Schedule /><Schedule />
                </div>

                <div className=' col-span-3 p-8 '>
                    <Commodities />
                </div>
            </div>


        </div >

    );
}

export default Results;