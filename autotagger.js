var input = $('#tag_editor_input')[0];
var tokens = $('#tokens')[0];
var rules = {};
chrome.extension.sendRequest("getSettings", function(resp) {
    rules = JSON.parse(resp)["rules"];
});


function addTag(tag) {
    if (getTags().indexOf(tag) != -1) // no dupe tags
	return;

    tokens.innerHTML += '<div class="token"><span class="tag">' + tag + '</span><a href="#" onclick="tag_editor_remove_tag($(this).up()); return false;">x</a></div>';
}

function getTags() {
    var tagTexts = [];
    $('.token > .tag').each(function() { tagTexts.push($(this).text()) } );
    return tagTexts;
}

function handleNewTag(event) {
    var newTag = event.target.children[0].innerHTML;
    if (newTag in rules) {
	tokens.removeEventListener("DOMNodeInserted", handleNewTag, false);
	for (tag in rules[newTag]) {
	    addTag(rules[newTag][tag]);
	}
    }
    tokens.addEventListener("DOMNodeInserted", handleNewTag, false);
}

tokens.addEventListener("DOMNodeInserted", handleNewTag, false);
