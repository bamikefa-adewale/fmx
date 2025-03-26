type MessageProps = {
  text: string;
};

const Message: React.FC<MessageProps> = ({ text }) => {
  return <div className="p-2 rounded-md mb-2 bg-white shadow-sm">{text}</div>;
};

export default Message;
