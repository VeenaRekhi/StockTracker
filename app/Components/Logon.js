// Include React
var React = require("react");

var LogModal = require("./LogModal.js");
// Here we include all of the sub-components


// Helper Function
//var helpers = require("./utils/helpers");

// This is the main component
var Logon = React.createClass({

//   // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return { };
  },

  // Here we describe this component's render method
  render: function() {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
            
                <div className="nav navbar-header"> 
                    <h3>Stock Monitoring Application</h3>
                </div>
                
                <h5>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                    <button className="btn btn-link btn-lg">
                        <a data-target="#regModal" data-toggle="modal">Register</a>
                    </button>
                    </li>
                    <li>
                    <button className="btn btn-link btn-lg">
                        <a data-target="#logModal" data-toggle="modal">LogIn</a>
                    </button>
                    </li>
                </ul>
                </h5>
            </div>
                <div>
                    <LogModal setUser={this.props.setUser}/>
                </div>
        </nav>

    );

  }

});

// Export the component back for use in other files
module.exports = Logon;