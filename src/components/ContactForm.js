import React from 'react';

const ContactForm = () => (
  <div className="contactForm">
    <div className="container">
      <h2>連絡フォーム</h2>
      <form>
        <div className="form-group">
          <label for="InputName">名前</label>
          <input type="name" className="form-control form-control-lg" id="InputName" aria-describedby="nameHelp" placeholder="名前"/>
        </div>
        <div className="form-group">
          <label for="InputEmail">メールアドレス</label>
          <input type="email" className="form-control form-control-lg" id="InputEmail" aria-describedby="emailHelp" placeholder="メールアドレス"/>
        </div>
        <div className="form-group">
          <label for="select">件名</label>
          <select id="select" className="form-control form-control-lg">
            <option value="">件名を選択してください</option>
            <option value="">サロンの場所について</option>
            <option value="">予約キャンセルについて</option>
            <option value="">コース内容について</option>
            <option value="">その他</option>
          </select>
        </div>
        <div className="form-group">
          <label for="text">連絡内容</label>
          <textarea id="name" className="form-control form-control-lg"></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-lg">送信</button>
      </form>
    </div>
  </div>
);


export default ContactForm;
