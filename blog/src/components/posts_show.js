import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount(){
    if(!this.props.post){
    const {id} =  this.props.match.params;
    this.props.fetchPost(id);
  }
}
onDeleteClick(){
  const {id} = this.props.match.params;
  this.props.deletePost(id,()=>{
    this.props.history.push('/');
  })
}
  //목록보기 -> 아템 선택,
  render() {
    const {post} = this.props;
    if (!post) {
      return <div>loading...</div>
    }
    return (
      <div>
        <Link to ="/" >Back TO Index</Link>
        <button className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}>
          Delete post
        </button>
       <h3>{post.title}</h3>
       <h6>Category: {post.categroy} </h6>
    <p>{post.contents}</p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  // console.log(state.posts.blog);
  return{ post : state.posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);