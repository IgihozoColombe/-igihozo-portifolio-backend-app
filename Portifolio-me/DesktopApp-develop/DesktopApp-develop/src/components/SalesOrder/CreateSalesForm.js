// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------
import React from 'react'

// css
import "../../assets/css/CreateForm.css";

class CreateSalesForm extends React.Component {

  constructor(props) {
    super(props);
  }

  
  componentDidMount(props) {
    $('#createForm').modal('show')
    $('#createForm').on('hide.bs.modal', (e) => {
      this.props.goBack()
    })
  }

  render() {
    return (
      <div className="modal fade group-profiling-create" tabIndex="-1" id="createForm" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content create-group">
            <div className="modal-header">
              <h5 className="modal-title text-capitalize">add {this.props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={(e) => this.props.submit(e, this.props)}>
              {
                this.props.children
              }
              <div className="d-flex justify-content-end mt-5 mb-2">
                <div className="sales-header-div ml-4">
                  <input type="submit" className="btn" value="Save" />
                </div>
                {/* <div className="sales-header-div ml-4">
                  <input type="submit" className="btn" value="Save" />
                </div>
                <div className="sales-header-div ml-4">
                  <input type="submit" className="btn" value="Save" />
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateSalesForm
// export default CreateSalesForm


// import React from 'react';
// import Modal from "react-bootstrap/Modal";
// import logo from "../../Images/logo.png";
// import ModalBody from "react-bootstrap/ModalBody";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalTitle from "react-bootstrap/ModalTitle";

// export const CreateSalesForm = (props) => {
// //    const [lgShow, setLgShow] = useState(false);
// //    const [llShow, setLlShow] = useState(false);
//     return (
//         <div>
//              <Modal
//                 size="lg"
//                 show={props.show}
//                 // onHide={() => setLgShow(false)}
//                 aria-labelledby=""
//             >
//                 <ModalHeader closeButton>
//                     <ModalTitle id="">Add {props.title}</ModalTitle>
//                 </ModalHeader>
//                 <ModalBody>
//                     {
//                         props.children
//                     }
//                     <div className="d-flex justify-content-end mt-5 mb-2">
//                         <div className="sales-header-div ml-4">
//                             <p className="px-4">Save</p>
//                         </div>
//                          <div
//                             className="sales-header-div ml-4"
//                             onClick={() => setLlShow(true)}
//                         >
//                             <p className="px-4">Print</p>
//                         </div>
//                         <div className="sales-header-div ml-4">
//                             <p className="px-4 py-2">Share</p>
//                         </div>
//                     </div>
//                 </ModalBody>
//                 </Modal>
//         </div>
//     )
// }
