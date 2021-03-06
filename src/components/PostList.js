import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader'

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      // this.props.fetchUser(post.id);
      // console.log(this.props.user)
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"/>
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId}/>
            </div>
        </div>
      )
    })
  }

  render() {
    return <div className="ui divided relaxed list">{this.renderList()}</div>;
  }
}

//state === combineReducers 
// essentially posts = allReducers.posts 
const mapStateToProps = (state) => {
  return {posts: state.posts}
}

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers}
)(PostList);
