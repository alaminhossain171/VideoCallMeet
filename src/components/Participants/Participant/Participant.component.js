import React from "react";
import Card from "../../Shared/Card/Card.component";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Participant.css";

export const Participant = (props) => {
  const {
    curentIndex,
    currentParticipant,
    hideVideo,
    videoRef,
    showAvatar,
    currentUser,
  } = props;
  if (!currentParticipant) return <></>;
  return (
    <div className={`participant ${hideVideo ? "hide" : ""}`}>
     <div className="container-fluid">
       <div className="row">
         <div className="col-md-8">
           <div className="card">
        {currentParticipant.name==='Shakib'?<Card>
     
     <video
     // style={currentParticipant.name==='Shakib'?{height:'300px',width:'300px'}:{height:'100px',width:'100px'}}

  
       ref={videoRef}
       className="video"
       id={`participantVideo${curentIndex}`}
       autoPlay
       playsInline
     ></video>
     {!currentParticipant.audio && (
       <FontAwesomeIcon
         className="muted"
         icon={faMicrophoneSlash}
         title="Muted"
       />
     )}
     {showAvatar && (
       <div
         style={{ background: currentParticipant.avatarColor }}
         className="avatar"
       >
         {currentParticipant.name[0]}
       </div>
     )}
     <div className="name">
      <h1> {currentParticipant.name}</h1>
       {currentUser ? "(You)" : ""}
     </div>
   </Card>:null}
           </div>
         </div>
         <div className="col-md-4">
         <div className="card">
           {currentParticipant.name!=='Shakib'?
           <Card>
     
           <video
           // style={currentParticipant.name==='Shakib'?{height:'300px',width:'300px'}:{height:'100px',width:'100px'}}
      
        
             ref={videoRef}
             className="video"
             id={`participantVideo${curentIndex}`}
             autoPlay
             playsInline
           ></video>
           {!currentParticipant.audio && (
             <FontAwesomeIcon
               className="muted"
               icon={faMicrophoneSlash}
               title="Muted"
             />
           )}
           {showAvatar && (
             <div
               style={{ background: currentParticipant.avatarColor }}
               className="avatar"
             >
               {currentParticipant.name[0]}
             </div>
           )}
           <div className="name">
            <h1> {currentParticipant.name}</h1>
             {currentUser ? "(You)" : ""}
           </div>
         </Card>
          
          :null
          }
           </div>
         </div>
       </div>
       
       </div> 
   
      
    </div>
  );
};
