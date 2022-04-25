import React from 'react'




function Registration() {
    return (
        <div id="reg">
            <div class="container">
                <button type="button" class="btn btn-light" id="farmer">Farmers</button>
                <div class="d-flex p-3" id="list">
                    <p><h2 id="contract">Contract</h2></p>
                    <i class="fa fa-caret-down"></i>
                    <p><button type="button" class="btn " data-toggle="modal" data-target="#myModal" id="fa">Add New</button></p>
                    <p><button type="button" class="btn " id="far">show  <i class="fa fa-caret-down"></i></button></p>
                </div>

  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
                <div class="card" >
                    <div class="card-body" id="card">
                        <table class="table" id="table">
                            <thead>
                                <tr>
                                    <th>Farmers ID</th>
                                    <th>Contract ID</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Units</th>
                                    <th>Amount</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="" alt="" />123</td>
                                    <td>12331</td>
                                    <td>25-05-2013</td>
                                    <td>25-06-2013</td>
                                    <td>Product Name</td>
                                    <td>20,020 NGN</td>
                                    <td>200</td>
                                    <td>4,000,000</td>
                                    <td>////</td>
                                </tr>
                                <tr>
                                <td><img src="" alt="" />123</td>
                                    <td>12331</td>
                                    <td>25-05-2013</td>
                                    <td>25-06-2013</td>
                                    <td>Product Name</td>
                                    <td>20,020 NGN</td>
                                    <td>200</td>
                                    <td>4,000,000</td>
                                    <td>////</td>
                                </tr>
                                <tr>
                                <td><img src="" alt="" />123</td>
                                    <td>12331</td>
                                    <td>25-05-2013</td>
                                    <td>25-06-2013</td>
                                    <td>Product Name</td>
                                    <td>20,020 NGN</td>
                                    <td>200</td>
                                    <td>4,000,000</td>
                                    <td>////</td>
                                </tr>
                                <tr>
                                <td><img src="" alt="" />123</td>
                                    <td>12331</td>
                                    <td>25-05-2013</td>
                                    <td>25-06-2013</td>
                                    <td>Product Name</td>
                                    <td>20,020 NGN</td>
                                    <td>200</td>
                                    <td>4,000,000</td>
                                    <td>////</td>
                                </tr>
                                <tr>
                                <td><img src="" alt="" />123</td>
                                    <td>12331</td>
                                    <td>25-05-2013</td>
                                    <td>25-06-2013</td>
                                    <td>Product Name</td>
                                    <td>20,020 NGN</td>
                                    <td>200</td>
                                    <td>4,000,000</td>
                                    <td>////</td>
                                </tr>
                                <tr>
                                <td><img src="" alt="" />123</td>
                                    <td>12331</td>
                                    <td>25-05-2013</td>
                                    <td>25-06-2013</td>
                                    <td>Product Name</td>
                                    <td>20,020 NGN</td>
                                    <td>200</td>
                                    <td>4,000,000</td>
                                    <td>////</td>
                                </tr>
                                <tr>
                                <td><img src="" alt="" />123</td>
                                    <td>12331</td>
                                    <td>25-05-2013</td>
                                    <td>25-06-2013</td>
                                    <td>Product Name</td>
                                    <td>20,020 NGN</td>
                                    <td>200</td>
                                    <td>4,000,000</td>
                                    <td>////</td>
                                </tr>
                                <tr>
                                <td><img src="" alt="" />123</td>
                                    <td>12331</td>
                                    <td>25-05-2013</td>
                                    <td>25-06-2013</td>
                                    <td>Product Name</td>
                                    <td>20,020 NGN</td>
                                    <td>200</td>
                                    <td>4,000,000</td>
                                    <td>////</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default Registration