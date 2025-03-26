import Image from "next/image";

type FriendItemProps = {
  friend: { id: string; name: string; avatarUrl?: string };
  onSelect: (friendId: string) => void;
};

const FriendItem: React.FC<FriendItemProps> = ({ friend, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(friend.id)}
      className="flex items-center w-full p-2 rounded hover:bg-gray-400"
    >
      {friend.avatarUrl && (
        <Image
          src={friend.avatarUrl}
          alt={`${friend.name}'s avatar`}
          width={100}
          height={100}
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      <span>{friend.name}</span>
    </button>
  );
};

export default FriendItem;
