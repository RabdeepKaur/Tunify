const http=require("http")
const hostname="127.0.0.1";
const port=3000

const server=http.createServer((req,res)=>{
    res.statustCode=200;
    res.setHeader("Content-type","text/plain")
    res.end("hello world")
});

server.listen(port,hostname,()=>{
console.log(`server runningat http://${hostname}:${port}/`);
})