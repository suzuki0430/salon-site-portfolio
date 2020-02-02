import React, { Component } from 'react';

const DataSalon = () => (
  <div className="salon">
    <div className="container">
      <h1 className="border-bottom">データ</h1>
      <table className="table table-striped table-bordered">
        <tbody>
          <tr>
            <th>電話番号</th>
            <td>03-0000-0000</td>
          </tr>
          <tr>
            <th>住所</th>
            <td>東京都大田区田園調布1-1-1 オシャレビル地下5F</td>
          </tr>
          <tr>
            <th>アクセス・道案内</th>
            <td>田園調布駅出口１付近の松屋とすき家と吉野家に囲まれています。</td>
          </tr>
          <tr>
            <th>営業時間</th>
            <td>毎日 10:00-20:00</td>
          </tr>
          <tr>
            <th>定休日</th>
            <td>年中無休※年末年始12/28-1/3は休み</td>
          </tr>
          <tr>
            <th>クレジットカード</th>
            <td>AMEXのみ</td>
          </tr>
          <tr>
            <th>価格</th>
            <td>¥5,000~</td>
          </tr>
          <tr>
            <th>スタッフ数</th>
            <td>スタイリスト3人</td>
          </tr>
          <tr>
            <th>こだわり条件</th>
            <td>夜１９時以降も受付OK／ロング料金なし／一人のスタイリストが仕上げまで担当／年中無休／最寄り駅から徒歩３分以内にある／ヘアセット／朝１０時前でも受付OK／ドリンクサービスあり／カード支払いOK／お子さま同伴可／禁煙</td>
          </tr>
          <tr>
            <th>備考</th>
            <td>髪質にお悩みの方はご相談ください。</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DataSalon;