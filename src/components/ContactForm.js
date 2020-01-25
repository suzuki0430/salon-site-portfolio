import React from 'react';

const ContactForm = () => (
  <div className="container">
    <h2>連絡フォーム</h2>
    <form>
      <input type="text" name="name" placeholder="名前" />
      <input type="text" name="mail" placeholder="メールアドレス"/><br/>
      <select>
        <option value="">件名を選択してください</option>
        <option value="">サロンの場所について</option>
        <option value="">予約キャンセルについて</option>
        <option value="">コース内容について</option>
        <option value="">その他</option>
      </select>
      <textarea name="contact">こちらに連絡内容を記載してください。</textarea>
    </form>
  </div>
);


export default ContactForm;