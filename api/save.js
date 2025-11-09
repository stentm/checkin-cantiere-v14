export const config={api:{bodyParser:true}};
export default async function handler(req,res){
 if(req.method!=="POST")return res.status(405).json({error:"no"});
 const url="https://sheetdb.io/api/v1/z76rw4k00z4qo";
 try{
  const payload=req.body||{};
  if(typeof payload.azienda!=="string")payload.azienda="";
  const response=await fetch(url,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({data:[payload]})
  });
  return res.status(200).json({ok:true});
 }catch(e){
  return res.status(500).json({error:e.toString()});
 }
}

