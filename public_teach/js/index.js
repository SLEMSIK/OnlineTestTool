onload = fetch("./student.csv").then(res =>{
    return res.text()
}).then(data =>{
    console.log(data);
})