var input = $('#tag_editor_input')[0];
var tokens = $('#tokens')[0];
var triggers = {};

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
    if (newTag in triggers) {
	tokens.removeEventListener("DOMNodeInserted", handleNewTag, false);
	for (tag in triggers[newTag]) {
	    add_tag(triggers[newTag][tag]);
	}
    }
    tokens.addEventListener("DOMNodeInserted", handleNewTag, false);
}

tokens.addEventListener("DOMNodeInserted", handleNewTag, false);

triggers = {"COOLK1DS B31NG COOL": ["dave", "terezi"]};