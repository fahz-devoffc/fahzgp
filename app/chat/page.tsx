'use client'
import {useState} from 'react'
export default function Chat(){
 const [msg,setMsg]=useState('')
 const [res,setRes]=useState('')
 async function send(){
  const r=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:msg})})
  const d=await r.json(); setRes(JSON.stringify(d))
 }
 return(<div><h1>FahzGPT</h1><input value={msg} onChange={e=>setMsg(e.target.value)}/><button onClick={send}>Send</button><pre>{res}</pre></div>)
}

