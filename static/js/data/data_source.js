import rs from "./hospital.js"

class getData
{
    static getRs10()
    {
        return new Promise((resolve, reject) => {
            const data = rs

            if(data){
                resolve(data)
            }else{
                reject("mboh")

            }
        })

        // return fetch(rs)
        // .then(response =>{
        //     return response.json();
        // }).then(responseJSON =>{
        //     if(responseJSON){
        //         return Promise.resolve(responseJSON)
        //     }else{
        //         return Promise.reject("failed")
        //     }
        // })
    }
}

export default getData;