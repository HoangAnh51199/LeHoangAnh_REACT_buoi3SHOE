import React, { Component } from 'react'
import ChiTietShoe from './ChiTietShoe'

export default class Modal extends Component {
  render() {
    return (
        <div>
       
        {/* Modal */}
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal thông tin </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                
                <div className="container-fluid">
                {/* Add rows here */}
                <ChiTietShoe  detail={this.props.detail} />
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
