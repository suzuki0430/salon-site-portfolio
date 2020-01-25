import React from 'react';

/** 投稿フォーム */
class Form extends React.Component {

  state = {
    ...this.createInitialForm()
  }

  /** フォームの初期表示内容を構築する */
  createInitialForm() {
    return {
      name: "名前",
      body: "こんにちは"
    };
  }

  /** 名前への入力を処理する */
  handleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  /** 本文への入力を処理する */
  handleChangeBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  /** 投稿処理を行う */
  handleSubmit(e) {
    // submitのデフォルト動作では
    // 画面が再描画されてしまうので阻止する
    e.preventDefault();

    const { name, body } = this.state;

    // 名前のバリデーション
    if ( !name || name.length === 0 ) {
      alert("名前が未入力です");
      return;
    }

    // 本文のバリデーション
    if ( !body || name.body === 0 ) {
      alert("本文が未入力です");
      return;
    }

    // 投稿内容を作成する
    const newPost = {
      name,
      body
    };

    // 投稿する
    this.props.onSubmitNewPost(newPost);

    // フォームの内容をリセットする
    this.setState({
      ...this.createInitialForm()
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        {/* 単一行テキスト */}
        <div>
          <label>
            名前:　
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.handleChangeName(e)} />
          </label>
        </div>

        {/* 複数行テキスト */}
        <div>
          <label>
            本文:　
            <textarea
              value={this.state.body}
              onChange={(e) => this.handleChangeBody(e)} />
          </label>
        </div>
        <input type="submit" value="登録" />
      </form>
    );
  }
}

export default Form;