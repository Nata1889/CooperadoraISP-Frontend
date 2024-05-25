export default function handler(req, res) {
    const {method} = req;
    
    if(method === 'GET'){}
    
    if(method === 'POST'){    
    const { body } = req;
    res.status(200).json({message: 'ok'});
    }
}