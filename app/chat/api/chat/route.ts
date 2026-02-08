import { NextResponse } from 'next/server'

export async function POST(req:Request){
 const {message}=await req.json()
 const r=await fetch('https://api.vikey.ai/v1/chat/completions',{
  method:'POST',
  headers:{
   'Authorization':`Bearer ${process.env.VIKEY_API_KEY}`,
   'Content-Type':'application/json'
  },
  body:JSON.stringify({
   model:process.env.VIKEY_MODEL_ID,
   messages:[
    {role:'system',content:'You are FahzGPT, created by fahzdev.'},
    {role:'user',content:message}
   ]
  })
 })
 const d=await r.json()
 return NextResponse.json(d)
}
