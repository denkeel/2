class Comments {
    constructor(settings) {
        this.settings = settings;
        this._init();
        this.allComments = null;
    }

    _init() {
        this.$wrapperInput = $(this.settings.nameWrapper);
        console.log(this.settings.nameWrapper)
        this.$wrapperComments = $(this.settings.nameComments);
        fetch('feedback.json')
            .then(data => data.json())
            .then(result => this._render(result));
        console.log(this.allComments);
        this._render();
    }

    _render(comments) {
        for (let comment in comments) { //странная ошибка вылетает что не iterable хотя это массив если of вместо in
            //this.allComments.push(comments[comment]);
            this._addComment(comments[comment]);            
        }
    }

    _addComment(comment) {
        this._addCommentItem(comment.name, comment.content)
    }

    addComment() {
        let name = this.$wrapperInput.find('#nameComments').val();
        let content = this.$wrapperInput.find('#inputComments').val();

        this._addCommentItem(name, content)
    }

    _addCommentItem(name, content) {
        this.$wrapperComments.append($('<hr>'));

        let $nameItem = $(`<h5>${name}</h5>`);
        $nameItem.appendTo(this.$wrapperComments);

        let $commentItem = $('<p/>');
        $commentItem.text(content);
        $commentItem.appendTo(this.$wrapperComments);

        //this.allComments.push({ });
    }
}