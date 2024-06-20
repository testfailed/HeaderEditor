"use strict";(self.webpackChunkheader_editor_docs=self.webpackChunkheader_editor_docs||[]).push([[430],{4508:function(o,a,e){e.r(a),e.d(a,{demos:function(){return n}});var t=e(93236),n={}},8606:function(o,a,e){e.r(a),e.d(a,{demos:function(){return n}});var t=e(93236),n={}},39606:function(o,a,e){e.r(a),e.d(a,{demos:function(){return n}});var t=e(93236),n={}},31062:function(o,a,e){e.r(a),e.d(a,{demos:function(){return n}});var t=e(93236),n={}},15805:function(o,a,e){e.r(a),e.d(a,{demos:function(){return n}});var t=e(93236),n={}},50503:function(o,a,e){e.r(a),e.d(a,{demos:function(){return n}});var t=e(93236),n={}},40621:function(o,a,e){e.r(a),e.d(a,{demos:function(){return n}});var t=e(93236),n={}},67451:function(o,a,e){e.r(a),e.d(a,{demos:function(){return n}});var t=e(93236),n={}},7355:function(o,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"RFC 2616",paraId:0,tocIndex:0},{value:" says:",paraId:0,tocIndex:0},{value:"Each header field consists of a name followed by a colon ",paraId:1,tocIndex:0},{value:'(":")',paraId:1,tocIndex:0},{value:" and the field value. Field names are case-insensitive.",paraId:1,tocIndex:0},{value:'So, since 4.0.0, Header Editor will reduce "header name" to lowercase. Except for custom functions: the custom function will still get the original header (except that it has been modified by other rules)',paraId:2,tocIndex:0},{value:"Yes, just modify it to ",paraId:3,tocIndex:1},{value:"_header_editor_remove_",paraId:3,tocIndex:1},{value:"As we know, the rules will disappear or not work",paraId:4,tocIndex:2},{value:"Note: Before doing all of the following, please back up your Chrome/Firefox profile folder!",paraId:5,tocIndex:2},{value:"Popup panel and management page is not work in Private Mode of Firefox. But the main features are available",paraId:6,tocIndex:3},{value:"Open ",paraId:7,tocIndex:4},{value:"chrome://extensions/?id=eningockdidmgiojffjmkdblpjocbhgh",paraId:7,tocIndex:4},{value:', enable "Enabled in incognito mode"',paraId:7,tocIndex:4},{value:"Open about:debugging, find the Internal UUID of Header Editor (e.g. d52e1cf2-22e5-448d-a882-e68f3211fa76).",paraId:8,tocIndex:5},{value:"Open Firefox options.",paraId:8,tocIndex:5},{value:"Go to Privacy & Security.",paraId:8,tocIndex:5},{value:'Set History mode to "Use custom settings".',paraId:8,tocIndex:5},{value:'Click "Exceptions".',paraId:8,tocIndex:5},{value:"Paste our URL: ",paraId:8,tocIndex:5},{value:"moz-extension://{Internal UUID}/",paraId:8,tocIndex:5},{value:" (the ",paraId:8,tocIndex:5},{value:"{Internal UUID}",paraId:8,tocIndex:5},{value:" is the Internal UUID of Header Editor you found in step one), for example, ",paraId:8,tocIndex:5},{value:"moz-extension://d52e1cf2-22e5-448d-a882-e68f3211fa76/",paraId:8,tocIndex:5},{value:", Then click 'Allow'.",paraId:8,tocIndex:5},{value:'Click "Save Changes".',paraId:8,tocIndex:5},{value:"Thanks to ",paraId:9,tocIndex:6},{value:"Thorin-Oakenpants",paraId:9,tocIndex:6},{value:" and ",paraId:9,tocIndex:6},{value:"henshin",paraId:9,tocIndex:6},{value:"Open ",paraId:10,tocIndex:6},{value:"about:config",paraId:10,tocIndex:6},{value:", make sure that ",paraId:10,tocIndex:6},{value:"dom.indexedDB.enabled",paraId:10,tocIndex:6},{value:" is ",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"Try to change ",paraId:10,tocIndex:6},{value:"extensions.webextensions.keepUuidOnUninstall",paraId:10,tocIndex:6},{value:" into true, is your problem solved?",paraId:10,tocIndex:6},{value:"Open your Firefox profile folder, if there are many files (about a thousand or more) named prefs-xxxx.js files with 0 bytes, closed firefox and deleted them.",paraId:10,tocIndex:6},{value:"Just ",paraId:11,tocIndex:7},{value:"submit a issue",paraId:11,tocIndex:7}]},70469:function(o,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"Support for cloud backup started with Header Editor 4.0.5.",paraId:0,tocIndex:0},{value:"Important: To use cloud backup, you should login your browser's account (like Firefox account, Google account, etc), and enable synchronize in browser's setting.",paraId:1,tocIndex:0},{value:"Cloud backup is supported through your browser's sync feature, as in Firefox Sync, or Chrome Sync, i.e. It means that HE has no server to storage your backup, your backup is storage at your browser's provider's server (like Mozilla, Google, etc). If your browser does not support sync, this feature will take no effect.",paraId:2,tocIndex:0},{value:"Your setting will be synchronize automatically, the backup feature only backup your rules, include groups.",paraId:3,tocIndex:1},{value:"Both Chrome and Firefox have its space limit, about 100KB. If you have too many rules, upload will be failed, but you can use the export normally.",paraId:4,tocIndex:2},{value:"As I know, Chrome has limits on the number of operations per unit of time. It means that you ",paraId:5,tocIndex:2},{value:"can not",paraId:5,tocIndex:2},{value:" upload frequently.",paraId:5,tocIndex:2},{value:"See ",paraId:6,tocIndex:4},{value:"chrome.storage API",paraId:6,tocIndex:4},{value:" for more technical details.",paraId:6,tocIndex:4},{value:"It seems that Firefox Sync is executed regularly, however if you want to force the cloud export you've to launch Firefox Sync manually.",paraId:7,tocIndex:5},{value:"A new installation may cause cloud storage data to be blanked.",paraId:7,tocIndex:5},{value:"See ",paraId:7,tocIndex:5},{value:"browser.storage API",paraId:7,tocIndex:5},{value:" for more technical details.",paraId:7,tocIndex:5}]},40130:function(o,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"Use custom functions to achieve more flexible functionality. So far, custom functions can be used in the following events: redirect request, modify the request headers, modify the response headers.",paraId:0,tocIndex:0},{value:"Custom functions are also limited by matching rules and exclusion rules. Only requests that meet the matching rules and do not satisfy the exclusion rule are processed by the custom function.",paraId:1,tocIndex:0},{value:"The priority of the custom function is not determined. It may be possible to customize the function earlier than the normal rule to the request, or it may be later. The order of execution of multiple custom functions is also variable.",paraId:2,tocIndex:0},{value:"When you can use normal rules to complete the case, please try to use the general rules, rather than custom function",paraId:3,tocIndex:0},{value:"Custom function writing does ",paraId:4,tocIndex:0},{value:"NOT",paraId:4,tocIndex:0},{value:" include the function head and tail, including only the function body. which is:",paraId:4,tocIndex:0},{value:`function(val, detail) { // does not include this line
// The codes you need to write
} // does not include this line
`,paraId:5,tocIndex:0},{value:"For example:",paraId:6,tocIndex:0},{value:"The custom function passes the arguments ",paraId:7,tocIndex:0},{value:"val",paraId:7,tocIndex:0},{value:" and ",paraId:7,tocIndex:0},{value:"detail",paraId:7,tocIndex:0},{value:", where ",paraId:7,tocIndex:0},{value:"detail",paraId:7,tocIndex:0},{value:" is the new parameter in version 2.3.0, see the description below. The return type varies depending on the rule type.",paraId:7,tocIndex:0},{value:"Pass the string with the full URL, if the function is not processed to return NULL or the original argument. For example, the following code will add a ",paraId:8,tocIndex:1},{value:"_test",paraId:8,tocIndex:1},{value:" to every request:",paraId:8,tocIndex:1},{value:`if (val.includes('_test.')) {
	return val;
}
const a = val.lastIndexOf('.');
if (a < 0) {
	return val;
} else {
	return val.substr(0, a) + '_test' + val.substr(a);
}
`,paraId:9,tocIndex:1},{value:"Since 4.0.3, return ",paraId:10,tocIndex:1},{value:"_header_editor_cancel_",paraId:10,tocIndex:1},{value:" will cancel this request, for example:",paraId:10,tocIndex:1},{value:`if (val.includes('utm_source')) {
	return '_header_editor_cancel_';
}
`,paraId:11,tocIndex:1},{value:"The incoming parameter is an array containing all header information in the following format: ",paraId:12,tocIndex:2},{value:'[{"name: "header name", "value": "header content"} ... ]',paraId:12,tocIndex:2},{value:".",paraId:12,tocIndex:2},{value:"Because JS pass the Object by reference, the custom function does not need any return value, only need to modify the incoming parameters to take effect. For example, this code will add ",paraId:13,tocIndex:2},{value:" HE/2.0.0",paraId:13,tocIndex:2},{value:" to the end of ",paraId:13,tocIndex:2},{value:"User-Agent",paraId:13,tocIndex:2},{value:":",paraId:13,tocIndex:2},{value:`for (const a in val) {
	if (val[a].name.toLowerCase() === 'user-agent') {
		val[a].value += ' HE/2.0.0';
		break;
	}
}
`,paraId:14,tocIndex:2},{value:"Note: the browser requires that value must be String, i.e.",paraId:15,tocIndex:2},{value:`let value = 123;
val.push({"name": "test", "value": value}); //Invalid, because value is number
val.push({"name": "test", "value": value.toString()}); //Valid
`,paraId:16,tocIndex:2},{value:"Since 2.3.0, the custom function adds the parameter ",paraId:17,tocIndex:3},{value:"detail",paraId:17,tocIndex:3},{value:" for the more precise control",paraId:17,tocIndex:3},{value:"This parameter is Object and is a read-only parameter. The structure is as follows:",paraId:18,tocIndex:3},{value:`{
	// Request id. Since 4.0.3
	id: 1234,
	// Request url. If this request has been redirected, this url is redirected url
	url: "http://example.com/example_redirected.png",
	// Tab ID. Note that this ID may be duplicated if user open multiple browser windows. Since 4.1.0
	tab: 2,
	// Request method, such as "GET", "POST", etc.
	method: "GET",
	// Request frame ID. Since 4.1.0
	frame: 123,
	// Request's parent frame ID. Since 4.1.0
	parentFrame: -1,
	// Request's proxy info. Since 4.1.0
	proxy: {
		host: "localhost",
		port: 8080
	},
	// Resource type
	type: "image",
	// Request time
	time: 1505613357577.7522,
	// URL of the resource which triggered the request. For example, if "https://example.com" contains a link, and the user clicks the link, then the originUrl for the resulting request is "https://example.com".
	// Since 4.1.0
	originUrl: '',
	// URL of the document in which the resource will be loaded. Only avaliable in Firefox. Since 4.1.0
	documentUrl: '',
	// Contains request header if enable "Include request headers in custom function" and this time is response
	// May be null. Since 4.1.0
	requestHeaders: null
}
`,paraId:19,tocIndex:3},{value:"Available resource type see ",paraId:20,tocIndex:3},{value:"here",paraId:20,tocIndex:3},{value:"You can use this to implement some advanced features, for example, the following code will only redirect images and videos from example.com to example.org:",paraId:21,tocIndex:3},{value:`if (detail.type === "media") {
	return val.replace("example.com", "example.org");
}
`,paraId:22,tocIndex:3},{value:"All custom functions are run in the background page, so to debug custom functions, open the console of the background page",paraId:23,tocIndex:4},{value:"Chrome: Enable developer mode in ",paraId:24,tocIndex:4},{value:"chrome://extensions/",paraId:24,tocIndex:4},{value:', then click the "Inspect views" - "background page" at the bottom of Header Editor',paraId:24,tocIndex:4},{value:"Firefox: Open ",paraId:25,tocIndex:4},{value:"about:debugging",paraId:25,tocIndex:4},{value:', enable add-on debugging, click the "Debug" at the bottom of Header Editor',paraId:25,tocIndex:4}]},11391:function(o,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"Please choose a different installation method depending on your browser:",paraId:0,tocIndex:0},{value:"Browser",paraId:1,tocIndex:0},{value:"Installation",paraId:1,tocIndex:0},{value:" Firefox",paraId:1,tocIndex:0},{value:"Mozilla Add-on",paraId:1,tocIndex:0},{value:" or our ",paraId:1,tocIndex:0},{value:"self-distributed version",paraId:1,tocIndex:0},{value:" Chrome",paraId:1,tocIndex:0},{value:"Chrome Web Store",paraId:1,tocIndex:0},{value:" Edge(Chromium)",paraId:1,tocIndex:0},{value:"Edge Addons",paraId:1,tocIndex:0},{value:"Click the HE icon in the upper right corner of your browser to open the HE Management Panel",paraId:2,tocIndex:1},{value:"Create a new rule: Click the Add button in the lower right corner, fill in the rules, and save.",paraId:2,tocIndex:1},{value:'Alternatively, you can download the rules of others in "Import and Export".',paraId:2,tocIndex:1},{value:"We provide a small tool that can help you migrate from other similar extensions to Header Editor: ",paraId:3,tocIndex:2},{value:"migrate-to-he.firefoxcn.net",paraId:3,tocIndex:2}]},65739:function(o,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"This feature can modify the response body, but it has the following requirements:",paraId:0,tocIndex:0},{value:"Use Firefox 57+",paraId:1,tocIndex:0},{value:'Check "Modify the response body (only supports Firefox)" in the options of HE',paraId:1,tocIndex:0},{value:"If you enable this feature, you may have the following problems:",paraId:2,tocIndex:0},{value:"To some extent affect access speed and resource occupation",paraId:3,tocIndex:0},{value:`
* Regardless of whether you have written relevant rules, HE will intercept the request data.`,paraId:3,tocIndex:0},{value:"Affects some content downloads",paraId:3,tocIndex:0},{value:"As of now, this feature only supports custom functions.",paraId:4,tocIndex:1},{value:"You need to specify the webpage encoding in order for HE to decode the data.",paraId:5,tocIndex:2},{value:"If you don't know what encoding the webpage uses, please open the console (press F12), switch to the Network tab, refresh the current page, and observe the Content-Type in the Response Headers.",paraId:6,tocIndex:2},{value:"The function has two parameters: the first parameter is the decoded text, and the second parameter is the detail object of the custom function. Returns the modified text.",paraId:7,tocIndex:3},{value:"Detail object please see ",paraId:8,tocIndex:3},{value:"custom function",paraId:9,tocIndex:3},{value:" document",paraId:8,tocIndex:3},{value:'For example, the following function will replace all "baidu" in the page with "Google"',paraId:10,tocIndex:3},{value:`return val.replace(/baidu/g, 'Google');
`,paraId:11,tocIndex:3}]},46941:function(o,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"Rules will apply to the URL that meets the matching criteria",paraId:0,tocIndex:1},{value:"All: Correspond to all urls, including the Header Editor itself",paraId:1,tocIndex:1},{value:`Regular expression
`,paraId:1,tocIndex:1},{value:"Supports standard JS regular expressions. For example, the regular expression you entered is ",paraId:2,tocIndex:1},{value:"str",paraId:2,tocIndex:1},{value:", then, in fact, the program will use the internal ",paraId:2,tocIndex:1},{value:"new RegExp(str)",paraId:2,tocIndex:1},{value:" to initialize the regular expression.",paraId:2,tocIndex:1},{value:"If the match rule is a regular expression, the modification result (currently including redirect to) supports the use placeholder like ",paraId:2,tocIndex:1},{value:"$1",paraId:2,tocIndex:1},{value:"Learn more about regular expression on ",paraId:2,tocIndex:1},{value:"Mozilla Developer Network",paraId:2,tocIndex:1},{value:"URL prefix: Including ",paraId:1,tocIndex:1},{value:"http://",paraId:1,tocIndex:1},{value:" URL prefix",paraId:1,tocIndex:1},{value:"Domain name: The full domain name that contains the subdomain",paraId:1,tocIndex:1},{value:'URL: Including "?" And the full address of all subsequent content',paraId:1,tocIndex:1},{value:'The rule will not take effect on the URL which is match the "exclude".',paraId:3,tocIndex:2},{value:"Through a custom function to realize a more flexible function, the specific use please see ",paraId:4,tocIndex:3},{value:"here",paraId:5,tocIndex:3},{value:'When using "Modify request header" or "Modify response header", set the header content to ',paraId:6,tocIndex:4},{value:"_header_editor_remove_",paraId:6,tocIndex:4},{value:" will remove this header (valid since 3.0.5)",paraId:6,tocIndex:4},{value:'When using "Redirect request" with custom function, return ',paraId:7,tocIndex:4},{value:"_header_editor_cancel_",paraId:7,tocIndex:4},{value:" will cancel this request  (valid since 4.0.3)",paraId:7,tocIndex:4},{value:"If you want to set a header content to empty, different browsers have different behaviors. Chrome will keep this header but its content will be empty. Firefox will remove this header",paraId:8,tocIndex:5},{value:"The following example is not guaranteed to be valid, only as an example to help users familiarize themselves with the rules of the Header Editor",paraId:9,tocIndex:6},{value:"For example, the Google public library is redirected to the mirror image of University of Science and Technology of China:",paraId:10,tocIndex:7},{value:"Regular expressions is ",paraId:11,tocIndex:7},{value:"^http(s?)://(ajax|fonts)\\.googleapis\\.com/(.*)",paraId:11,tocIndex:7},{value:", redirect to ",paraId:11,tocIndex:7},{value:"https://$2.proxy.ustclug.org/$3",paraId:11,tocIndex:7},{value:"Redirect all HTTP requests of ",paraId:12,tocIndex:7},{value:"sale.jd.com",paraId:12,tocIndex:7},{value:", ",paraId:12,tocIndex:7},{value:"item.jd.com",paraId:12,tocIndex:7},{value:" and ",paraId:12,tocIndex:7},{value:"www.jd.com",paraId:12,tocIndex:7},{value:" to the HTTPS:",paraId:12,tocIndex:7},{value:"Regular expressions is ",paraId:13,tocIndex:7},{value:"http://(sale|item|www).jd.com",paraId:13,tocIndex:7},{value:", redirect to ",paraId:13,tocIndex:7},{value:"https://$1.jd.com",paraId:13,tocIndex:7},{value:"Redirect all wikipedia's HTTP requests to HTTPS:",paraId:14,tocIndex:7},{value:"Regular expressions is ",paraId:15,tocIndex:7},{value:"^http://([^\\/]+\\.wikipedia\\.org/.+)",paraId:15,tocIndex:7},{value:", redirect to ",paraId:15,tocIndex:7},{value:"https://$1",paraId:15,tocIndex:7},{value:"Just modify the request header named User-Agent, but the function can only affect the ability of the server to determine UA, which can not be pseudo in local through JS",paraId:16,tocIndex:8}]},71545:function(o,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"The following rules are maintained by a third party. Header Editor does not guarantee the timeliness and security of the rules. If there is any problem, please contact the rule maintainer.",paraId:0,tocIndex:0},{value:"Amazon > Amazon Smile",paraId:1,tocIndex:1},{value:" By ",paraId:1,tocIndex:1},{value:"vertigo220",paraId:1,tocIndex:1},{value:"If you want your maintenance rules to appear here, please ",paraId:2,tocIndex:2},{value:"submit an issue",paraId:2,tocIndex:2}]},9309:function(o,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[]}}]);
