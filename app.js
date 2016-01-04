var app = angular.module('App', ['ngSanitize', 'luegg.directives', 'ngAnimate']);

app.controller("Messaging", function($scope, $timeout){
	$scope.showApps = false;
	$scope.bubbles = [];
	var y = '<p>Hi, I&#39;m Grant Park. Ask me anything you&#39;d like. <br/> For suggestions, try <span style="color:lemonchiffon;">&#39;?&#39;</span>';
	var z = {mes: y, isMe: true}
	$scope.bubbles.push(z);
	$scope.check = function(checkee){
		if (checkee) {
			return "oddBubble"
		} else {
			return "evenBubble"
		}
	}
	$scope.send = function(){
		if ($scope.bubbleText != "" && $scope.bubbleText) {
			var l = {mes: $scope.bubbleText, isMe: false}
			$scope.bubbles.push(l);
			if ($scope.bubbleText.toLowerCase() === "?") {
				$scope.bubbleText = '';
				$timeout(function(){
				var x = 'Try including: <span style="color:lemonchiffon"> <br/> &#39;links&#39; <br/> &#39;projects&#39; <br/> &#39;hobbies&#39; <br/> &#39;contact&#39; <br/> &#39;about&#39; </span> ';
				var w = {mes: x, isMe: true}
				$scope.bubbles.push(w);
				}, 500);
			} else if ($scope.bubbleText.toLowerCase().indexOf("links") != -1) {
				$scope.bubbleText = '';
				$timeout(function(){
				var x = 'Here is my <a href="resume.pdf">resume</a>, <a href="https://github.com/sungjp">Github</a>, and <a href="https://www.linkedin.com/in/granthpark">LinkedIn</a>.';
				var w = {mes: x, isMe: true}
				$scope.bubbles.push(w);
				}, 500);
			} else if ($scope.bubbleText.toLowerCase().indexOf("resume") != -1) {
				$scope.bubbleText = '';
				$timeout(function(){
					var x = 'Here is my <a href="resume.pdf">resume</a>.';
				var w = {mes: x, isMe: true}
				$scope.bubbles.push(w);
				}, 500);
			} else if ($scope.bubbleText.toLowerCase().indexOf("git") != -1) {
				$scope.bubbleText = '';
				$timeout(function(){
					var x = 'Here is my <a href="https://github.com/sungjp">Github</a>.';
					var w = {mes: x, isMe: true}
				$scope.bubbles.push(w);
				}, 500);
			} else if ($scope.bubbleText.toLowerCase().indexOf("linkedin") != -1) {
				$scope.bubbleText = '';
				$timeout(function(){
				var x = 'Here is my <a href="https://www.linkedin.com/in/granthpark">LinkedIn</a>.';
				var w = {mes: x, isMe: true}
				$scope.bubbles.push(w);
				}, 500);
			} else if ($scope.bubbleText.toLowerCase().indexOf("hob") != -1) {
				$scope.bubbleText = '';
				var x = 'I&#39;m an <a href="https://soundcloud.com/grant-park">indie artist</a>, rowing athlete, and <a href="https://www.behance.net/grantpark">designer</a>. Check out my <a href="https://medium.com/@grantxs">blog</a>! &#128513;';
				var w = {mes: x, isMe: true}
				$timeout(function(){
				$scope.bubbles.push(w);
				}, 500);
			} else if ($scope.bubbleText.toLowerCase() === "about") {
				$scope.bubbleText = '';
				var x = 'I&#39;m a sophomore at Amherst College and I freelance iOS. I&#39;m also a full-stack dev working with MEAN, Python, and Swift/Obj-C.';
				var w = {mes: x, isMe: true}
				$timeout(function(){
				$scope.bubbles.push(w);
				}, 500);
			} else if ($scope.bubbleText.toLowerCase().indexOf("contact") != -1) {
				$scope.bubbleText = '';
				var x = 'You can email me at <a href="mailto:gpark18@amherst.edu">gpark18@amherst.edu</a> or call/text (256)690-3141 &#128522;';
				var w = {mes: x, isMe: true}
				$timeout(function(){
				$scope.bubbles.push(w);
				}, 500);
			} else if ($scope.bubbleText.toLowerCase().indexOf("project") != -1) {
				$scope.bubbleText = '';
				var x = 'Tap this phone&#39;s home button to transition to my projects.';
				var w = {mes: x, isMe: true}
				$timeout(function(){
				$scope.bubbles.push(w);
				}, 500);
			} else if ($scope.bubbleText.toLowerCase() === "clear") {
				$scope.bubbleText = '';
				var x = '<p>Hi, I&#39;m Grant Park. Ask me anything you&#39;d like. <br/> For suggestions, try <span style="color:lemonchiffon;">&#39;?&#39;</span>';
				var w = {mes: x, isMe: true}
				$timeout(function(){
				$scope.bubbles.push(w);
				}, 500);
			} else {
				$scope.bubbleText = '';
				var x = "Sorry, I can&#39;t to respond to that.";
				var w = {mes: x, isMe: true}
				$timeout(function(){
				$scope.bubbles.push(w);
				}, 500);
			}
		};
	};
});

app.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});
