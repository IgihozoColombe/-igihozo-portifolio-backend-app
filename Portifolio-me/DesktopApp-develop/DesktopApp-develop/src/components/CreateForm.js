// ---------------------- to dos --------------------
// Add form validation
// ----------------------------------------------------
import React from "react";

// css
import "../assets/css/CreateForm.css";

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    $("#createForm").modal("show");
    $("#createForm").on("hide.bs.modal", (e) => {
      this.props.goBack();
    });
  }

  render() {
    return (
      <div
        className="modal fade group-profiling-create"
        tabIndex="-1"
        id="createForm"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content create-group">
            <div className="modal-header">
              <h5 className="modal-title text-capitalize">
                add {this.props.title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={(e) => this.props.submit(e, this.props)}>
              {this.props.children}
              <div className="form-row justify-content-end m-0">
                <input
                  type="submit"
                  className="btn"
                  value="Save"
                  onClick={() => {
                    this.props.setModal(false);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateForm;
