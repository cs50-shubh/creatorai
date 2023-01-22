export async function callService(text){
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
    }
    const response = await fetch('https://api.openai.com/v1/images/generations',{
        headers: headers,
        method: 'POST',
        body: JSON.stringify({
            "prompt": text,
            "n": 10,
            "size": "1024x1024"
        })
    }).then(res=>{
        return res.json()
    }).catch(e=>console.error(e))

    console.log('final',response)
    return response
}