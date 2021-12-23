import "../data/data_source.js";
import getData from "../data/data_source.js"

const getDataRs10 = () =>
{
    const listRs = document.querySelector("rs-list-10");
    const renderVal = (val)=>{
        listRs.rs10 = val;
    };

    const getList = async () => 
    {
        try{
            const val = await getData.getRs10();
            renderVal(val);
        }catch(msg){
            console.log(msg)
        }
    };
    getList();
}

export default getDataRs10;