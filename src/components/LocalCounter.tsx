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
      className="bg-green-500 shadow-green-500/50 shadow-lg btn-common"
      onClick={() => actions.add()}>
      local counter - {state.value}
    </div>
  );
};

export default LocalCounter;
