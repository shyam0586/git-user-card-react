import React, { useState } from 'react';

function ModalWindow() {
  const [searchResultArr, clickedCard] = useState(0);
  let details = searchResultArr[clickedCard];
  if (details !== undefined) {
    details = JSON.stringify(details);
  }

  return (
    <div>
      <div
        className="modal fade"
        id="basicExampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <code>{details}</code>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
