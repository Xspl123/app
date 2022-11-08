import React from 'react';
import Modal from 'react-bootstrap/Modal';
export default function Videocall(props) {
const closed_model = () => {
props.setVideocall_show(false);
}
return (
<Modal className="modal-dialog-centered"
   show={props.Videocall_show}
   >
   <Modal.Body>
      <div className="p-0 modal-body">
         <div className="text-center p-4 pb-0">
            <img src={process.env.PUBLIC_URL+"/assets/img/profile-placeholder.23f97dd8.png"} alt="" className="videocallModal-bg" />
            <div className="position-absolute start-0 end-0 bottom-0">
               <div className="text-center">
                  <div className="d-flex justify-content-center align-items-center text-center">
                     <div className="avatar-md h-auto"><button type="button" className="avatar-sm rounded-circle btn btn-light"><span className="avatar-title bg-transparent text-muted font-size-20"><i className="fas fa-microphone-alt-slash"></i></span></button></div>
                     <div className="avatar-md h-auto"><button type="button" className="avatar-sm rounded-circle btn btn-light"><span className="avatar-title bg-transparent text-muted font-size-20"><i className="fas fa-volume-up"></i></span></button></div>
                     <div className="avatar-md h-auto"><button type="button" className="avatar-sm rounded-circle btn btn-light"><span className="avatar-title bg-transparent text-muted font-size-20"><i className="fas fa-video-slash"></i></span></button></div>
                     <div className="avatar-md h-auto"><button type="button" className="avatar-sm rounded-circle btn btn-light"><span className="avatar-title bg-transparent text-muted font-size-20"><i className="fas fa-sync-alt"></i></span></button></div>
                  </div>
                  <div className="mt-4"><button type="button" onClick={closed_model} className="btn btn-danger avatar-md call-close-btn rounded-circle btn btn-danger"><span className="avatar-title bg-transparent font-size-24"><span className="material-icons">close</span></span></button></div>
               </div>
               <div className="p-4 bg-primary mt-n4">
                  <div className="text-white mt-4 text-center">
                     <h5 className="font-size-18 text-truncate mb-0 text-white">Miranda Valentine</h5>
                  </div>
               </div>
            </div>
          
         </div>
        
      </div>
   </Modal.Body>
</Modal>
)
};