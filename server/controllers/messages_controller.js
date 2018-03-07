let messages = [];
let id = 0;

module.exports = {
    create: (req, res)=> {
        let {text, time} = req.body 
        let message = {
            text: text,
            time: time,
            id: id
        }
        id++;
        messages.push(message);
        res.status(200).send(messages);      
    },
    read: (req, res)=>{
        res.status(200).send(messages); 
    } ,
    update: (req, res)=>{
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === +req.params.id){
                messages[i].text = req.body.text || messages[i].text
                return res.status(200).send(messages);
            }
        }
    
        res.status(200).send(messages); 
    }, 
    delete: (req, res)=>{
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === +req.params.id){
                messages.splice(i,1)}
        res.status(200).send(messages); 
        }
    } 
}  