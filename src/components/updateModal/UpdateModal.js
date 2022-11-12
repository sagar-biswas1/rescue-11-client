import React from "react";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");


//don't worry its just a package for modal. just go and explore https://www.npmjs.com/package/react-modal

export default function UpdateModal({_id,isReload,setIsReload}) {
  console.log(_id)
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setIsReload(!isReload)
  }

  const handleUpdate=(event)=>{
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const textData = form.textData.value;

    fetch(`http://localhost:4000/note/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, textData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
      });

console.log(userName, textData)
  }
  return (
    <div>
      <button onClick={openModal} className="color-801336 btn-sm btn">
        {" "}
        Update
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="btn btn-sm btn-warning">
          close
        </button>
        <div>Please insert your text</div>
        <div className=" p-3 color-4D4C7D">
          <form className="container " onSubmit={handleUpdate} >
            <div className="input-group mb-3 mt-5">
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                aria-label="Username"
                name="userName"
              />
            </div>

            <div className="input-group">
              <textarea
                className="form-control"
                aria-label="With textarea"
                name="textData"
              ></textarea>
            </div>
            <div className="mt-4">
              <input type="submit" value="submit" className="btn btn-info" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

