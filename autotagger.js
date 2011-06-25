input = $('#tag_editor_input')[0];
tokens = $('#tokens')[0];

function add_tag(tag) {
    tok = document.getElementById("tokens");
    console.log(tok.constructor.toString());
    tok.innerHTML += '<div class="token"><span class="tag">' + tag + '</span><a href="#" onclick="tag_editor_remove_tag($(this).up()); return false;">x</a></div>';
}