'use client';
import Image from "next/image";
import { useState } from "react";
import "/public/css/navigate.css";

const linkData = {
    'Projects':['All Projects','Face Brick','Thin Brick','Pavers'],
    'Face Brick':['Colors','Textures','Sizes'],
    'Thin Brick':['Colors','Textures','Sizes'],
    'Pavers':['Colors','Sizes'],
    'Pathway Aggregate':[],
    'Resources':['Literature','BIM','Specifications','Technical Notes','Brick Briefs'],
    'Who We Are':['Profile','Videos'],
    'Careers':['Current Openings','Application','Solicitud','Apply Online'] 
};
type LinkDataKey = keyof typeof linkData;
interface NavigateProps {
    pageSettings: string;
  }
export default function Navigate({pageSettings}:NavigateProps){
    const pageSetup = pageSettings;
    const [activeKey,setActiveKey]=useState<LinkDataKey | null>(null);
    const [subShown,setSubShown]=useState(false);
    const openSub = (key:LinkDataKey)=>{ //the :string is need to tell it what type it is. This i believe is due to type script.
        setActiveKey(key);
        if(!activeKey){
            setSubShown(true); 
        }else if(activeKey===key){
            setSubShown(false);
            setActiveKey(null)
        }
    }
    console.log(pageSetup);

    return(
        <div className={`row ${pageSetup==='gradient'? 'gradient':''} `}>
            <div className="col-12 p-0">
                <div className="row pt-2  d-flex justify-content-center justify-content-lg-start">
                    <div className="col-7 col-md-5  col-xl-3 ">
                        <div className="row ">
                            <div className="col  d-flex justify-content-center">
                                <Image  src={pageSetup==='gradient' || pageSetup==='dark' ?'/assets/logoWhite.png':'/assets/logoBlack.png'} width={200} height={75} alt='Endicott logos'/>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col ">
                                <span className="fs-6 ">Endicott Clay Products Company</span>
                            </div>
                        </div>                
                    </div>
                    <div className="col d-flex align-items-end justify-content-end  "> 
                        {
                            Object.keys(linkData).map((key)=>(
                                <button role="button" key={key} className=" p-2 pb-0 me-2 " onClick={()=>openSub(key as LinkDataKey)}> {key}</button>          
                            ))
                        }
                    </div>
                </div>
                <div className={`row bg-black text-white p-0 m-auto d-flex justify-content-end   ${subShown?'subMenuOpen':'subMenu'}   `}>
                    <div className="col p-0  m-auto d-inline-flex justify-content-end ">
                        
                        {
                            activeKey &&(
                                linkData[activeKey].map((link,index)=>(
                                    <button role="button" key={index} className={`m-0 pt-2 pb-1 me-4`}>{link}</button>
                                ))
                            )                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}