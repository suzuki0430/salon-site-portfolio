import React from 'react';
import Form from './Form';
import List from './List';


// const NewsPage = (props) => (
//   <div className="container">
//     <List
//       posts={this.props.posts} />
//   </div>
// );

class NewsPage extends React.Component {
  state = {
    posts: []
  }
  render() {
    return (
      <div className="container">
        <List
          posts={this.state.posts} /> {/* （3） */}
      </div>
    );
  }
}

export default NewsPage;