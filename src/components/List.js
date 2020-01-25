import React from 'react';

/** 投稿のリスト */
class List extends React.Component {

  /** 投稿ひとつ分を描画する関数 */
  renderPost(post) {
    return (
      <div>
        <div>名前: {post.name}</div>
        <div>本文: {post.body}</div>
      </div>
    );
  }

  /** 投稿の間に<hr/>を描画する関数 */
  renderHrIfNotTail(posts, index) {
    const isTail = (posts.length - 1) === index;
    return isTail ? null : <hr />
  }

  render() {

    const { posts } = this.props;

    return (
      <div>
        { posts.map((post, index) => {
          return (
            <div key={`${post.id}`}>
              {this.renderPost(post)}
              {this.renderHrIfNotTail(posts, index)}
            </div>
          );
        }) }
      </div>
    )
  }
}

export default List;