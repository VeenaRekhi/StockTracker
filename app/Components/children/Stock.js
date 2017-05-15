var React = require("react");

var Stock = React.createClass({
handleRemoveStock: function() {
    this.props.onStockDelete( this.props.stock );
    return false;
},
render: function() {
    return (
    <tr>
        <td>{this.props.stock[0]}</td>
        <td>{this.props.stock[1]}</td>
        <td>{this.props.stock[2]}</td>
        <td>{this.props.stock[3]}</td>
        <td>{this.props.stock[4]}</td>
        <td><input type="button"  className="btn btn-primary" value="Remove" onClick={this.handleRemoveStock}/></td>
    </tr>
    );
}
});

module.exports = Stock;