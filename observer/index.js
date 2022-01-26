var Blog = /** @class */ (function () {
    function Blog() {
        this._posts = [];
        this._subscribers = [];
    }
    Blog.prototype.addSubscriber = function (subscriber) {
        this._subscribers.push(subscriber);
    };
    Blog.prototype.removeSubscriber = function (subscriber) {
        this._subscribers.splice(this._subscribers.indexOf(subscriber), 1);
    };
    Blog.prototype.makePost = function (text) {
        var _this = this;
        this._posts.push(text);
        this._lastPost = text;
        this._subscribers.forEach(function (s) {
            s.update(_this);
        });
    };
    Blog.prototype.getLastPost = function () {
        return this._lastPost;
    };
    return Blog;
}());
var BlogSubscriber = /** @class */ (function () {
    function BlogSubscriber() {
    }
    BlogSubscriber.prototype.update = function (publisher) {
        this._postToRead = "[".concat(publisher.getLastPost(), "]");
    };
    BlogSubscriber.prototype.subscribe = function (blog) {
        blog.addSubscriber(this);
    };
    BlogSubscriber.prototype.unsubscribe = function (blog) {
        blog.removeSubscriber(this);
    };
    return BlogSubscriber;
}());
var b = new Blog();
var s1 = new BlogSubscriber();
var s2 = new BlogSubscriber();
var s3 = new BlogSubscriber();
s1.subscribe(b);
b.makePost("first post");
console.log(s1._postToRead, s2._postToRead, s3._postToRead);
s3.subscribe(b);
b.makePost("second post");
console.log(s1._postToRead, s2._postToRead, s3._postToRead);
s2.subscribe(b);
b.makePost("last post");
console.log(s1._postToRead, s2._postToRead, s3._postToRead);
