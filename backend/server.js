import e from "express";
import path from 'path'
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const app=e()

app.use(e.json())
app.use(e.static(path.join(__dirname,"public")))
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})
app.listen(8000,()=>{
    console.log("server Started at http://localhost:8000/")
})