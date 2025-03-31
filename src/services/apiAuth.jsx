import axiosConfig from "../config/axiosConfig";

// eslint-disable-next-line no-async-promise-executor
export const apiAuthLogin = (payload) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await axiosConfig({
            method:'post',
            url:'auth/login',
            data:payload
        })
        relsove(responsive);
    } catch (error) {
        return reject(error);
    }
})