import { FaTrash } from 'react-icons/fa';

const RemoveCartItemButton = ({ onClick,className }) => {
  return (
    <button onClick={onClick} className={className}>
      <FaTrash />
    </button>
  );
};

export default RemoveCartItemButton;