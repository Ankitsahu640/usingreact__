import React from 'react';
import { SlCalender , SlHandbag} from "react-icons/sl";
import { RiUserLine } from "react-icons/ri";
import { TiArrowRepeat } from "react-icons/ti";
import { TfiAlarmClock } from "react-icons/tfi";
import { VscTag } from "react-icons/vsc";
import { RiBook3Line } from "react-icons/ri";
import {LineChart} from './ApexChart';


export default function LineCard(){
  return (
    <div className='d-flex cards'>
        <div>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid d-flex">
                <a className="navbar-brand" style={{fontSize:"16px"}} href="/"><SlCalender size="25px" color="rgb(22, 182, 209)" strokeWidth={1.5} /> Your school</a>
                <div className="collapse navbar-collapse secondnav" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active-n" href="/">New signups</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Revenue</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Product sales</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Last 7 days
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Last 1 day</a></li>
                            <li><a className="dropdown-item" href="/">Last Month</a></li>
                            <li><a className="dropdown-item" href="/">Last Year</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
          </nav>
          <div>
              {<LineChart/>}
          </div>
        </div>
        <div className="container text-center row row-cols-3" style={{margin:"auto"}}>
            <div className="col six-icon"><RiUserLine size="35px" color='#1ddeba' />
              <p>All users</p>
              <div>1</div>
            </div>
            <div className="col six-icon"><TiArrowRepeat size="35px" color='#1ddeba'/>
              <p>Conversions</p>
              <div>0<span>%</span></div>
            </div>
            <div className="col six-icon"><SlHandbag size="35px" color='#1ddeba' strokeWidth={0.22}/>
              <p>30 days sales</p>
              <div>0</div>
            </div>
            <div className="col six-icon"><TfiAlarmClock size="35px" color='#1ddeba' strokeWidth={0.22}/>
              <p>Avg time</p>
              <div>0<span>min</span></div>
            </div>
            <div className="col six-icon"><RiBook3Line size="35px" color='#1ddeba'/>
              <p>Courses</p>
              <div>0</div>
            </div>
            <div className="col six-icon"><VscTag size="35px" color='#1ddeba' strokeWidth={0.22}/>
              <p>Course categories</p>
              <div>0</div>
            </div>
        </div>
    </div>
  )
}