import React from "react";
import { useState } from "react"

export default function SidebarItem({item}){
    return(
        <a href={item.path || "#"} className ="sidebar-item plain">
            {item.icon && <i className={item.icon}></i>}
            {item.title}
        </a>
    )

}