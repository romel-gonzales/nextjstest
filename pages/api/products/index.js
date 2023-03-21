export default async function (req, res){
    const {method} = req
    
    switch (method){
        case "GET":
            const resp = await fetch('https://dummyjson.com/products')
            const data = await resp.json()
            return res.json(data)            
        default:
            return res.send('No se proporciono un metodo!!')
    }
}
