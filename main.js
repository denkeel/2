$(document).ready(() => {
    let comments = new Comments({
        nameWrapper: '.articles',
        nameComments: '.comments'
    });
    $('.btnComments').on('click', e => {
        comments.addComment();
    });
});