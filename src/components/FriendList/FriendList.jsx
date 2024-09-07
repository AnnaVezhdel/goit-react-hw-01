import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
return (
<div>
    <ul className={s.list}>
    {friends.map((friend) => (
        <li key={friend.id}>
        <FriendListItem friend={friend} />
        </li>
    ))}
    </ul>
</div>
);
};

export default FriendList;