import React, { useEffect } from 'react'
import { getDataFailure, getDataRequest, getDataSuccess,getData } from '../redux/action'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'

import style from "./home.module.css"
import {FaComments} from "react-icons/fa"
import { useState } from 'react'

const Home = () => {
  const [sort,setSort]=useState("")
    const data=useSelector((state)=>state.data)
   
    const dispatch=useDispatch()

   
 const handleget=(e)=>{
   setSort(e.target.value)
   if(sort==="low"){
    data.sort(function(a,b){
      return a.num_comments-b.num_comments
    })
   }else if(sort=="high"){
    data.sort(function(a,b){
      return b.num_comments-a.num_comments
    })
   }
  
 }
   


    useEffect(()=>{
    dispatch(getData)
    },[])
  
  return (
    <>
     <div className={style.navbar}>
          <div className={style.tencomment}> Top 10 comment</div>
           <div className={style.select}>
           <label >Sort it:</label>

<select onChange={handleget} >
  <option value="">none</option>
  <option value="high"> Low to High</option>
  <option value="low"> High to Low</option>
 
</select >
           </div>
        </div>
       <div className={style.container}>
       

       { data && data.map((r,index)=>{
        // console.log(r.num_comments)
        return <div key={index} className={style.card}>
        <div className={style.image_div}>
           <div className={style.image_div_inside_container}>
           <div className={style.image}>
            <img className={style.picture} src="https://media.istockphoto.com/photos/cute-boy-iconic-character-with-glasses-3d-rendering-picture-id1389898082?b=1&k=20&m=1389898082&s=170667a&w=0&h=QAdCcVt7bxw92Tf_B4Nlz_r1v3XzRucXExmPIJDvz2I=" alt="" />
           </div>
          <div className={style.text}>
          <div> {r.author}</div> 
            </div>
           </div>
        </div>
        <div className={style.heading}>{r.title}</div>
        <div className={style.footer}>
        <div className={style.comment_div}>
          <div className={style.comment_logo}>
            <FaComments className={style.fa}/>
          </div>
          <div className={style.comment_num}><div>{r.num_comments}</div></div>
         
        </div>
         <div className={style.link}>
         <a className={style.a} href={r.url}>GO TO Article</a>
         </div>
         
        </div>
      </div>
       })}
      


       </div>
    </>
  )
}

export default Home