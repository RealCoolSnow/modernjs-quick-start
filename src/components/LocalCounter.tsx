import { useLocalModel } from '@/store';
import countModel from '@/store/models/count-model';

/**
 * 局部状态
 * @returns
 */
const LocalCounter = () => {
  const [state, actions] = useLocalModel(countModel);
  return (
    <div
      className="border-2 px-1 m-2 text-red-400"
      onClick={() => actions.add()}>
      local counter - {state.value}
    </div>
  );
};

export default LocalCounter;
