import React, {useState} from 'react';
import { DonutChart } from './ApexChart';


function Modal() {
  const [invites,setInvites]=useState("30");
  const [duration,setDuration]=useState("9");
  const [price,setPrice]=useState("200");
  const [total,setTotal] = useState("54000")

  const ChangeInvites=(e)=>{
    setInvites(e.target.value);
    setTotal(invites*duration*price)
  }
  const ChangeDuration=(e)=>{
    setDuration(e.target.value);
    setTotal(invites*duration*price)
  }
  const ChangePrice=(e)=>{
    setPrice(e.target.value);
    setTotal(invites*duration*price)
  }

  return (
    <div>
        <button type="button" className="btn modalbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Invite User
        </button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-content ">
              <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Invite User</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="row g-3 module-form">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Name" aria-label="First name"/>
                </div>
                <div className="col">
                  <input type="email" className="form-control" placeholder="Email" aria-label="Last name"/>
                </div>
              </div>
                <div className='d-flex'>
                 <div className='modal-input'>
                    <div className='modal-slide'>
                      <div><label for="invites">No. of Invites</label><span style={{marginLeft:"175px"}}>{invites}</span></div>
                      <input type="range" id="invites" name="invites" min="0" max="100" defaultValue={invites} step="1" onChange={ChangeInvites}/>
                    </div>
                    <div className='modal-slide'>
                      <div><label for="duration">Duration Of Event</label><span style={{marginLeft:"130px"}}>{duration} hr</span></div>
                      <input type="range" id="duration" name="duration" min="1" max="100" defaultValue={duration} onChange={ChangeDuration}/>
                    </div>
                    <div className='modal-slide'>
                      <div><label for="duration">Price</label><span style={{marginLeft:"210px"}}>{price} Rs.</span></div>
                      <input type="range" id="price" name="price" min="10" max="1000" step="10" defaultValue={price} onChange={ChangePrice}/>
                    </div>
                    <div style={{marginTop:"30px"}}>
                      <span style={{fontWeight:"700",fontSize:"medium"}}>Total Price :</span><span style={{marginLeft:"120px"}}>{total} Rs.</span>
                    </div>
                 </div>
                 <div className="module-chart">
                    <DonutChart total={total}/>
                 </div>
                </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Invite</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Modal
