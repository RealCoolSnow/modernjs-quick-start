import { useModel } from '@modern-js/runtime/model';
import countModel from '@/store/models/count-model';
/**
 * 全局状态
 * @returns
 */
const Counter = () => {
  const [state, actions] = useModel(countModel);
  return (
    <div
      className="bg-blue-500 text-white shadow-blue-500/50 shadow-lg btn-common"
      onClick={() => actions.add()}>
      counter - {state.value}
    </div>
  );
};

export default Counter;
