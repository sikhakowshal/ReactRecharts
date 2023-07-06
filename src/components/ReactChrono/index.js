import {Chrono} from 'react-chrono'

const items = [
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle: 'Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
]

const ReactChrono = () => (
  <div className="chrono-container">
    <Chrono mode="VERTICAL">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
          className="image"
          alt="chennai-super-kings"
        />
      </div>
      <div>
        <h1>Mumbai Indians</h1>
        <p>IPL Team winner for the year 2019 is Mumbai Indians.</p>
      </div>
    </Chrono>
  </div>
)

export default ReactChrono
