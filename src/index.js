import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="Props are cool!" userPicture={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" commentText="Props are fun!" userPicture={faker.image.avatar()}/>
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" commentText="Props are cool." userPicture={faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
}

reactDOM.render(<App/>, document.querySelector('#root'))