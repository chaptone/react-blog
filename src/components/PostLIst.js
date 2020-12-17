import React, { useEffect } from "react";
import { connect } from "react-redux";
import { List, Avatar } from "antd";

import { fetchPostAndUser } from "../actions";
import UserHeader from "./UserHeader";

const PostList = ({ fetchPostAndUser, posts }) => {
  useEffect(() => {
    fetchPostAndUser();
  }, []);

  return (
    <List
      itemLayout="horizontal"
      dataSource={posts}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<UserHeader id={item.userId} />}
            description={
              <List.Item>
                <List.Item.Meta
                  title={<a href="">{item.title}</a>}
                  description={item.body}
                />
              </List.Item>
            }
          />
          <div></div>
        </List.Item>
      )}
    />
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPostAndUser })(PostList);
