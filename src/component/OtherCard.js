import React from 'react';
import { RiUserLine } from "react-icons/ri";
import { SlUserFollowing, SlUser } from "react-icons/sl";
import { FaSellsy } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { GoKey } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";

export default function OtherCard() {
  return (
    <div className='d-flex'>
     <div className="cards othercards">
            <div className='new-users'><RiUserLine color='rgb(22, 182, 209)' size="22px"/><span>New users <span class="badge bg-success">See all</span></span></div> 
            <div className='d-flex newUsers'>
                <div style={{backgroundColor:"#ccc", borderRadius:"3px",padding:"4px"}}><SlUser size="35px"/></div>
                <span>hubx<div>24 minutes</div></span>
            </div>
     </div>
     <div className="cards othercards">
            <div className='new-users'><FaSellsy size="22px"/><span>How to sell courses blog <span class="badge bg-success">See all</span></span></div> 
            <div className='sellCourse'>
                <ul type="circle">
                  <li className='d-flex'><div className='sellCourse-list'>Blended learning: What it is, Why it Matters & How to Apply</div><div className='sellCourse-date'>7 days ago </div></li>
                  <li className='d-flex'><div className='sellCourse-list'>Join the Course Sales Bootcamp [free Live Workshops]</div><div className='sellCourse-date'>12 days ago </div></li>
                  <li className='d-flex'><div className='sellCourse-list'>12 Steps to Creating Awesome Live Classes in 2021</div><div className='sellCourse-date'>20 days ago </div></li>
                  <li className='d-flex'><div className='sellCourse-list'>Guy kawasaki on the Future of Business in the Midst of a Pandemic</div><div className='sellCourse-date'>22 days ago </div></li>
                  <li className='d-flex'><div className='sellCourse-list'>What is Educational Marketing & How to use it to Grow with Examples</div><div className='sellCourse-date'>23 days ago </div></li>
                </ul>
            </div>
     </div>
     <div className="cards othercards">
            <div className='new-users'><TbActivityHeartbeat color='grey' size="22px"/><span>Events Log <span class="badge bg-success">See all</span></span></div> 
            <div className='d-flex Events'>
                <ul>
                  <li className='d-flex'><span style={{margin:"-3px 0px -5px -13px"}}><GoKey size="13px" color="grey"/></span><div style={{color: "rgb(22, 182, 209)",fontSize:"0.85rem"}}> hubx</div><div style={{color:"gray" ,fontSize:"x-small",position:"relative", left:"200px"}}>22 minutes </div></li>
                  <li className='d-flex'><div style={{fontSize:"0.85rem"}}>Logged in</div></li>
                  <li className='d-flex'><div style={{color: "rgb(22, 182, 209)",fontSize:"0.85rem"}}>more info</div></li>
                </ul>
            </div>
     </div>
     <div>
        <div className='cards othercards' style={{background: "repeating-linear-gradient(135deg,#fafbfc,#fafbfc 28px,#e4f6f3 28px,#e4f6f3 56px)"}}>
          <div className='trial'><div>Trial Period</div> <div><GiSandsOfTime size="30px" color="rgb(22, 182, 209)"/></div></div>
          <div className='trialCircle'><h4>30</h4><span>DAYS LEFT</span></div>
          <span class="badge upgradebtn">Upgarde now! 	&#62;&#62;</span>
        </div>
        <div className="cards othercards">
            <div className='new-users'><RiUserLine color='rgb(22, 182, 209)' size="22px"/><span>Online users (1)</span></div> 
            <div className='d-flex newUsers'>
                <div style={{backgroundColor:"#ccc", borderRadius:"3px",padding:"4px"}}><SlUserFollowing size="35px"/></div>
                <span style={{fontSize:"medium", color:"rgb(22, 182, 209)"}}>hubx<span class="badge contactbtn">Contact</span></span>
        </div>
     </div>
     </div>
    </div>
  )
}
