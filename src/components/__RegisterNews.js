// import React from 'react';
// import Form from './Form';
// import List from './List';


// class RegisterNews extends React.Component {
//   state = {
//     posts: []
//   }
//   saveNewPost(newPost) {
//     //idを付加する
//     const newPostWithId = {
//       ...newPost,
//       id: Date.now()
//     }
//     // state内の投稿リストに加える。スプレッド構文
//     this.setState({
//       posts: [...this.state.posts, newPostWithId] // （4）
//     });
//   }
//   render() {
//     return (
//       <div className="container">
//         <h2>記事登録フォーム</h2>
//         <Form
//           onSubmitNewPost={
//             (newPost) => this.saveNewPost(newPost) // （1）
//           }
//         />
//         <hr />
//         <List
//           posts={this.state.posts}
//         /> {/* （3） */}
//       </div>
//     );
//   }
// }

// export default RegisterNews;