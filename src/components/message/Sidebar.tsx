import FriendItem from "./FriendItem";

type SidebarProps = {
  friends: { id: string; name: string; avatarUrl?: string }[];
  onSelectFriend: (friendId: string) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({
  friends,
  onSelectFriend,
}) => {
  return (
    <div className="w-64 bg-gray-300 p-4">
      <h2 className="text-lg font-semibold mb-2 text-green-700">Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} className="mb-2">
            <FriendItem friend={friend} onSelect={onSelectFriend} />
          </li>
        ))}
      </ul>
    </div>
  );
};
