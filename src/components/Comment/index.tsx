import React from 'react';
import { NewComment } from './styles';

interface PropsComment {
  username: string;
  text: string;
  avatar: string;
}

const Comment: React.FC<PropsComment> = ({ avatar, username, text }) => {
  return (
    <NewComment>
      <header>
        <img src={avatar} alt={username} />
        <strong>{username}</strong>
      </header>

      <p>{text}</p>
    </NewComment>
  );
};

export default Comment;
