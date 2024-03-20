import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  id: string;
  currentStatus?: boolean;
  onClick: () => void;
}

const Like = ({ currentStatus, onClick }: LikeProps) => {
  const [status, setStatus] = useState(currentStatus);

  useEffect(() => {
    setStatus(currentStatus);
  }, [currentStatus]);

  const toggleLike = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <AiFillHeart onClick={toggleLike} color="#ff6b81" size={20} />;
  return <AiOutlineHeart onClick={toggleLike} size={20} />;
};

export default Like;
