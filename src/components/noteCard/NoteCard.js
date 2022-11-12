import React from 'react';
import UpdateModal from '../updateModal/UpdateModal';


const customStyles = {
  position: "absolute",
  top: "-40px",
  left: "43%",
  height: "80px",
  width: "80px",
};

const NoteCard = ({ note,setIsReload,isReload }) => {


  const handleDelete=()=>{
    fetch(`http://localhost:4000/note/${note?._id}`, {
      method: "DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
    if(data.deletedCount){
      setIsReload(!isReload)
    }
    })
  }

  return (
    <div className="col mt-5" style={{ position: "relative" }}>
      <div className="rounded h-100 color-060930 note-card">
        <div
          className=" bg-warning  rounded-circle mx-auto mt-2"
          style={customStyles}
        >
          <p className="text-center p-2  fs-2 fw-bold text-dark">
            {" "}
            {note?.userName?.substring(0, 1)}
          </p>
        </div>
        <div className="card-body mt-5">
          <h5 className="card-title">Author : {note?.userName}</h5>
          <p className="card-text">{note?.textData}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <div>
            <button
              className="color-801336 btn btn-sm mx-2 "
              onClick={handleDelete}
            >
              delete
            </button>
          </div>
          {/* <button>update</button> */}
          <UpdateModal _id={note._id} setIsReload={setIsReload} isReload={isReload} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;