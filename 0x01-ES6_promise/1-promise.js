export default function getFullResponseFromApi (success) {
    return new Promise((resolve, reject) => {
        if(success){
            resolve({
                status: 200,
                body: 'Sucess'
            })
        } else {
            reject("The fake API is not working correctly")
        }
    })
}
