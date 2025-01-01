"use client"

import { useState } from "react"
export function Player(){
    const [load, setLoad] = useState<boolean>(false)
    return(

        <>
            <div className="flex-col self-end">
        <iframe width="100%" height="140" className="flex-col" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/552669753&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}></iframe>
        <div className="flex-col align-text-top">
            <a href="https://soundcloud.com/guinoei" title="guinoei" target="_blank" className="text-center text-sm">guinoei</a>  ·  <a href="https://soundcloud.com/guinoei/ano-novo-yeah" title="ano novo (yeah)" target="_blank" className="text-center text-sm">ano novo (yeah)</a>
        </div>
        </div>
 
        </>
    )
}