import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card } from "antd";

const UserHeader = ({ id, users }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const foundUser = users.find(u => u.id === id);
    if (foundUser) {
      setUser(foundUser);
    }
  }, [users]);

  return <div>{user.name}</div>;
};

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, null)(UserHeader);
