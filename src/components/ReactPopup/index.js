import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const ReactPopup = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button className="trigger-btn" type="button">
          Trigger
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <>
          <div>
            <p>React is a widely used programming language</p>
          </div>
          <button className="trigger-btn" type="button" onClick={() => close()}>
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
)

export default ReactPopup
