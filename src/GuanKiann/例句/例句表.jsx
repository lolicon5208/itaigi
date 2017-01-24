import React from 'react';
import Modal from 'react-modal';


export default class 例句表 extends React.Component {

  render() {
    return (
        <Modal
          isOpen={this.props.看例句}
          onRequestClose={this.props.關例句.bind(this)}
          >
          <h2 ref="subtitle">已上傳！</h2>
          <div>
            <div>
              事情辦得很妥善。<br/>
              代誌做了真四序。<br/>
              Tāi-tsì tsò-liáu tsin sù-sī. <br/>
            </div>
            <div>
              事情辦得很妥善。<br/>
              代誌做了真四序。<br/>
              Tāi-tsì tsò-liáu tsin sù-sī. <br/>
            </div>
            <div>
              事情辦得很妥善。<br/>
              代誌做了真四序。<br/>
              Tāi-tsì tsò-liáu tsin sù-sī. <br/>
            </div>
          </div>
          <button
            onClick={this.props.關例句.bind(this)}
            className="ui button"
            >好</button>
        </Modal>
    );
  }
}


