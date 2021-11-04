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
      className="border-2 px-1 m-2 text-red-400"
      onClick={() => actions.add()}>
      counter - {state.value}
    </div>
  );
};

export default Counter;
