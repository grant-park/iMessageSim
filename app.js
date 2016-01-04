var app = angular.module('App', ['ngSanitize', 'luegg.directives', 'ngAnimate']);

app.controller("Messaging", function($scope, $timeout){
	$scope.bubbles = [];
	$scope.count = 0;
	$scope.bubbles.push('<p>Hi, I&#39;m Grant Park. Ask me anything you&#39;d like. <br/> For suggestions, try <span style="color:lemonchiffon;">&#39;?&#39;</span>');
	$scope.send = function(){
		if ($scope.bubbleText != "" && $scope.bubbleText) {
			$scope.bubbles.push($scope.bubbleText);
			$scope.count+=2;
			if ($scope.bubbleText.toLowerCase() === "?") {
				$scope.bubbleText = '';
				$timeout(function(){
				$scope.bubbles.push('Try including: <span style="color:lemonchiffon"> <br/> &#39;links&#39; <br/> &#39;projects&#39; <br/> &#39;hobbies&#39; <br/> &#39;contact&#39; <br/> &#39;about&#39; </span> ');
				}, 600);
			} else if ($scope.bubbleText.toLowerCase().indexOf("links") != -1) {
				$scope.bubbleText = '';
				$timeout(function(){
				$scope.bubbles.push('Here is my <a href="resume.pdf">resume</a>, <a href="https://github.com/sungjp">Github</a>, and <a href="https://www.linkedin.com/in/granthpark">LinkedIn</a>.');
				}, 600);
			} else if ($scope.bubbleText.toLowerCase().indexOf("resume") != -1) {
				$scope.bubbleText = '';
				$timeout(function(){
				$scope.bubbles.push('Here is my <a href="resume.pdf">resume</a>.');
				}, 600);
			} else if ($scope.bubbleText.toLowerCase().indexOf("git") != -1) {
				$scope.bubbleText = '';
				$timeout(function(){
				$scope.bubbles.push('Here is my <a href="https://github.com/sungjp">Github</a>.');
				}, 600);
			} else if ($scope.bubbleText.toLowerCase().indexOf("linkedin") != -1) {
				$scope.bubbleText = '';
				$timeout(function(){
				$scope.bubbles.push('Here is my <a href="https://www.linkedin.com/in/granthpark">LinkedIn</a>.');
				}, 600);
			} else if ($scope.bubbleText.toLowerCase().indexOf("hob") != -1) {
				$scope.bubbleText = '';
				$timeout(function(){
				$scope.bubbles.push('I&#39;m an <a href="https://soundcloud.com/grant-park">indie artist</a>, rowing athlete, and <a href="https://www.behance.net/grantpark">designer</a>. Check out my <a href="https://medium.com/@grantxs">blog</a>! &#128513;');
				}, 600);
			} else if ($scope.bubbleText.toLowerCase() === "about") {
				$scope.bubbleText = '';
				$timeout(function(){
				$scope.bubbles.push('I&#39;m a sophomore at Amherst College and I freelance iOS. I&#39;m also a full-stack dev working with MEAN, Python, and Swift/Obj-C.');
				}, 600);
			} else if ($scope.bubbleText.toLowerCase().indexOf("contact") != -1) {
				$scope.bubbleText = '';
				$timeout(function(){
				$scope.bubbles.push('You can email me at <a href="mailto:gpark18@amherst.edu">gpark18@amherst.edu</a> or call/text (256)690-3141 &#128522;');
				}, 600);
			} else if ($scope.bubbleText.toLowerCase().indexOf("project") != -1) {
				$scope.bubbleText = '';
				$timeout(function(){
				$scope.bubbles.push('Tap this phone&#39;s home button to transition to my projects.');
				}, 600);
			}

			else {
				$scope.bubbleText = '';
				$timeout(function(){
				$scope.bubbles.push("Sorry, I can&#39;t to respond to that.");
				}, 600);
			}
		
		};
	};
});

app.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});
