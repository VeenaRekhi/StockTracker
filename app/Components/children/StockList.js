var React = require("react");

var Stock = require("./Stock");

var StockList = React.createClass({
    getInitialState: function() {
        var list = this.props.clist;
        return {list};
    },    
    handleStockRemove: function(stock){
        console.log("handleStockRemove");
        this.props.onStockRemove( stock );
    },
    render: function() {
        var stocks = [];
        var that = this; // TODO: Needs to find out why that = this made it work; Was getting error that onStockDelete is not undefined
        // this.props.clist.forEach(function(stock) {
        // stocks.push(<Stock stock={stock} onStockDelete={that.handleStockRemove} /> );
        // });
console.log("outside stock map - this is the clist");
console.log(this.state.list);
//        {this.state.list.map(function(stock, i) {
        for (var i in this.state.list) {
console.log("inside stock map");
            stocks.push(<Stock stock={this.state.list[i]} onStockDelete={that.handleStockRemove} />);
         };

        return ( 
        <div>
            {/*<h5>Current Positions</h5>*/}
            <table className="table table-striped">
             <thead>
              <tr>
                <th>Symbol</th>
                <th>Shares</th>
                <th>Price</th>
                <th>Date</th>
                <th>Broker</th>
                <th>Action</th>
              </tr>
             </thead>
            <tbody>{stocks}</tbody>
            </table>
        </div>
        );
    }
});

module.exports = StockList;