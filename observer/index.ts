/**
 * Publisher interface
 */
interface Publisher {
  addSubscriber(subscriber: Subscriber): void;
  removeSubscriber(subscriber: Subscriber): void;
}

/**
 * Subscriber interface
 */
interface Subscriber {
  update(publisher: Publisher): void;
}

/**
 * log class
 */
class Blog implements Publisher {
  private _subscribers: Array<Subscriber>;
  private _posts: Array<string>;
  private _lastPost: string;

  constructor() {
    this._posts = [];
    this._subscribers = [];
  }

  addSubscriber(subscriber: Subscriber): void {
    this._subscribers.push(subscriber);
  }
  removeSubscriber(subscriber: Subscriber): void {
    this._subscribers.splice(this._subscribers.indexOf(subscriber), 1);
  }

  public makePost(text: string): void {
    this._posts.push(text);
    this._lastPost = text;

    this._subscribers.forEach((s) => {
      s.update(this);
    });
  }

  public getLastPost(): string {
    return this._lastPost;
  }
}

/**
 * Blog subscriber class
 */
class BlogSubscriber implements Subscriber {
  public _postToRead: string;

  update(publisher: Blog): void {
    this._postToRead = `[${publisher.getLastPost()}]`;
  }

  public subscribe(blog: Blog) {
    blog.addSubscriber(this);
  }
  public unsubscribe(blog: Blog) {
    blog.removeSubscriber(this);
  }
}

const b = new Blog();
const s1 = new BlogSubscriber();
const s2 = new BlogSubscriber();
const s3 = new BlogSubscriber();

s1.subscribe(b);
b.makePost("first post");
console.log(s1._postToRead, s2._postToRead, s3._postToRead);

s3.subscribe(b);
b.makePost("second post");
console.log(s1._postToRead, s2._postToRead, s3._postToRead);

s2.subscribe(b);
b.makePost("last post");
console.log(s1._postToRead, s2._postToRead, s3._postToRead);
