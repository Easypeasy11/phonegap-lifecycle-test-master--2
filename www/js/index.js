var paused_count =0;
var resumed_count = 0;
var launched_count = 0;





    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
        window.localStorage.setItem("pen", "black");
        window.localStorage.setItem("usb", "green");
        window.localStorage.setItem("phone_number", "999");
        window.localStorage.getItem("pen");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    } 
    $(function () {          
    $("#myText").text("hoover");
    });
