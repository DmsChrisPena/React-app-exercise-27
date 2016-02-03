var React = require('react');
var ReactDOM = require('react-dom');

var InfoBox = require('./components/InfoBox.jsx');

//Plain Box
ReactDOM.render(<InfoBox boxType="plain" boxTitle="20" boxSubtitle="New Followers added this month" span="4" />, document.getElementById('plainBox1'));
ReactDOM.render(<InfoBox boxType="plain" boxTitle="$ 1250" boxSubtitle="Average Monthly Income" span="4" />, document.getElementById('plainBox2'));
ReactDOM.render(<InfoBox boxType="plain" boxTitle="$ 13865" boxSubtitle="Yearly Income Goal" span="4" />, document.getElementById('plainBox3'));

//Cover Box
ReactDOM.render(<InfoBox boxType="cover" boxTitle="18&deg;" boxSubtitle="Texas" boxBackground="#FF8A00" span="12" />, document.getElementById('coverBox1'));

//TopBar Box
ReactDOM.render(<InfoBox boxType="topBar" boxTitle="New visitors" boxSubtitle="1.5k" boxBarBackground="#0096D0" span="12" />, document.getElementById('topBarBox1'));
ReactDOM.render(<InfoBox boxType="topBar" boxTitle="Bounce Rate" boxSubtitle="50%" boxBarBackground="#B28AD6" span="12" />, document.getElementById('topBarBox2'));
ReactDOM.render(<InfoBox boxType="topBar" boxTitle="Searches" boxSubtitle="28%" boxBarBackground="#FF4826" span="12" />, document.getElementById('topBarBox3'));
ReactDOM.render(<InfoBox boxType="topBar" boxTitle="Traffic" boxSubtitle="140.5 kb" boxBarBackground="#63C254" span="12" />, document.getElementById('topBarBox4'));

//BottomBar Box
var bottomBarArray1 = [
    {"title": 15080, "subtitle": "Shots Views"},
    {"title": 12000, "subtitle": "Likes"},
    {"title": 5100, "subtitle": "Comments"}
];
var bottomBarArray2 = [
    {"title": 42095, "subtitle": "Subscribers"},
    {"title": 9900, "subtitle": "Followers"},
    {"title": 17800, "subtitle": "Pokes"}
];

ReactDOM.render(<InfoBox boxType="bottomBar" boxInfo={bottomBarArray1} boxBarBackground="#484D4D" boxBackground="#0096D0" span="12" />, document.getElementById('bottomBarBox1'));
ReactDOM.render(<InfoBox boxType="bottomBar" boxInfo={bottomBarArray2} boxBarBackground="#484D4D" boxBackground="#CD59AE" span="12" />, document.getElementById('bottomBarBox2'));
