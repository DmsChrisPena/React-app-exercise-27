var React = require('react');

var InfoBox = React.createClass({
    render: function() {
        var marginStyle = {
            margin: 8
        };

        //Plain Info Box
        if(this.props.boxType === "plain") {
            var plainTitleStyle = {
                color: "#636363",
                fontWeight: 500
            };
            var plainSubtitleStyle = {
                color: "#969696",
                fontWeight: 300
            };
            return (
                <div className={"col-md-" + this.props.span}>
                    <div className="panel panel-default" style={marginStyle}>
                        <div className="panel-body">
                            <h2 style={plainTitleStyle}>{this.props.boxTitle}</h2>
                            <h4 style={plainSubtitleStyle}>{this.props.boxSubtitle}</h4>
                        </div>
                    </div>
                </div>
            );
        }

        //Cover Info Box
        if(this.props.boxType === "cover") {
            marginStyle.backgroundColor = this.props.boxBackground;

            var coverTitleStyle = {
                color: "white",
                fontWeight: 300,
                textAlign: "center"
            };

            var coverSubtitleStyle = {
                color: "#E4F6FA",
                fontWeight: 300,
                textAlign: "center"
            };

            return(
                <div className={"col-md-" + this.props.span}>
                    <div className="panel panel-default" style={marginStyle}>
                        <div className="panel-body">
                            <h2 style={coverTitleStyle}>{this.props.boxTitle}</h2>
                            <h4 style={coverSubtitleStyle}>{this.props.boxSubtitle}</h4>
                        </div>
                    </div>
                </div>
            );
        }

        //Topbar Info Box
        if(this.props.boxType === "topBar") {
            var topBarBackground = {
                background: this.props.boxBarBackground
            };
            var bodyHeight = {
                height: 70
            };
            var topBarTitleStyle = {
                marginBottom: 4,
                color: "#E4F6FA",
                fontWeight: 300
            };
            var topBarSubtitleStyle = {
                marginTop: 4,
                color: "white"
            };

            return(
                <div className={"col-md-" + this.props.span}>
                    <div className="panel panel-default" style={marginStyle}>
                        <div className="panel-heading" style={topBarBackground}>
                            <h4 style={topBarTitleStyle}>{this.props.boxTitle}</h4>
                            <h2 style={topBarSubtitleStyle}>{this.props.boxSubtitle}</h2>
                        </div>
                        <div className="panel-body" style={bodyHeight}>
                        </div>
                    </div>
                </div>
            );
        }

        //BottomBar Info Box
        if(this.props.boxType === "bottomBar") {
            var boxBodyStyle = {
                height: 216,
                background: this.props.boxBackground
            };
            var bottomBarStyle = {
                background: this.props.boxBarBackground,
                borderTop: "none"
            };
            var bottomBarTitle = {
                marginTop: 4,
                marginBottom: 4,
                color: "white",
                textAlign: "center",
                fontWeight: 400
            };
            var bottomBarSubtitle = {
                marginTop: 4,
                color: "#A9AAAA",
                textAlign: "center",
                fontWeight: 300
            };
            return (
                <div className={"col-md-" + this.props.span}>
                    <div className="panel panel-default" style={marginStyle}>
                        <div className="panel-body" style={boxBodyStyle}>
                        </div>
                        <div className="panel-footer" style={bottomBarStyle}>
                            <div className="row">
                                {this.props.boxInfo.map(function(object, index){
                                    return(
                                        <div className="col-xs-4" key={index + object}>
                                            <h2 style={bottomBarTitle}>{object.title}</h2>
                                            <h4 style={bottomBarSubtitle}>{object.subtitle}</h4>
                                        </div>
                                    );
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        //Alert if no type or incorrect type entered
        return (
            <div>
                <h4>Please make sure that you boxType is one of the following:</h4>
                <p>"plain", "cover", "topBar", "bottomBar"</p>
            </div>
        )
    }
});


module.exports = InfoBox;
