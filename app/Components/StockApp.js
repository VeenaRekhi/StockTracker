var React = require("react");

var StockList = require("./children/StockList");
var NewRow = require("./children/NewRow");
var helpers = require("./utils/helpers");

var StockApp = React.createClass({ 

    getInitialState: function() {
        // return {stocklist: [{sName:"",sQuantity:0 ,sPrice:""}]};
        // if this is coming from login, stokclist must be populated from the sql table
        //  if stocklist.length == 0
        // return {stocklist:[]}
        //   else
        //    return {stocklist: from the table}
        // insert db posting here   !!!!!!!
//          var pos = {email: this.props.setUser};
          var pos = {email: 'johnsmith@gmail.com'};
          console.log("Get holding:" + pos);
          var stocklist = [];
          helpers.getPortfolio(pos).then(function(resp) {
      
            console.log("coming back from helper.gettPortfolio" + resp);
            var stocklistJSON = JSON.parse(resp.request.response);
            for (var i=0; i< stocklistJSON.length; i++) {
                stocklist[i] = {ticker: stocklistJSON[i].ticker,
                      tickershares: stocklistJSON[i].tickershares,
                      tickerprice: stocklistJSON[i].tickerprice,
                      tickerdate: stocklistJSON[i].tickerdate.substring(0,10),
                      broker: ""};
            }
console.log(stocklist);

          }.bind(this));
         return {setUser: this.props.setUser, stocklist: stocklist};
    },
    handleNewRowSubmit: function( newstock ) {
        this.setState({stocklist: this.state.stocklist.concat([newstock])} );
    },
    handleStockRemove: function( stock ) {

        var index = -1; 
        var clength = this.state.stocklist.length;
        for ( var i = 0; i < clength; i++ ) {
            if( this.state.stocklist[i].sName === stock.sName ) 
            {index = i;
            break;
            }
        };
        this.state.stocklist.splice( index, 1 );  
        this.setState( {stocklist: this.state.stocklist} );
    },

    render: function() {
        var tableStyle = {width: '80%'};
        var leftTdStyle = {width: '80%',padding:'5px',verticalAlign: 'top'};
        var rightTdStyle = {width: '20%',padding:'5px',verticalAlign: 'top'};
        return ( 
        
        <div className="container" id="stock-content">
            {/*<div className="page-header">
            <h1>Adding A Table Row in ReactJS</h1>
            </div>
        */}

        <table style={tableStyle}>
            <tbody>
            <tr>
            <td style={leftTdStyle}>
                <StockList setUser={this.props.setUser} clist={this.state.stocklist}  onStockRemove={this.handleStockRemove}/>
            </td>
            <td style={rightTdStyle}>
                <NewRow setUser={this.props.setUser} onRowSubmit={this.handleNewRowSubmit}/>
            </td>
            </tr>
            </tbody>
        </table>

        </div>
        );
    }
});    

module.exports = StockApp;
