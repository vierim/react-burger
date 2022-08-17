import { useEffect, useState } from 'react';

import { IFeedStatusProps, IFeedStatusState } from './interface';

const FeedStatus: React.FC<IFeedStatusProps> = ({ status }) => {
  const [state, setState] = useState<IFeedStatusState | undefined>(undefined);

  useEffect(() => {
    let res: IFeedStatusState | undefined;

    switch (status) {
      case 'created': {
        res = {
          statusText: 'Создан',
          statusColor: '#F2F2F3',
        };
        break;
      }
      case 'pending': {
        res = {
          statusText: 'Готовится',
          statusColor: '#F2F2F3',
        };
        break;
      }
      case 'done': {
        res = {
          statusText: 'Выполнен',
          statusColor: '#00CCCC',
        };
        break;
      }
      case 'cancelled': {
        res = {
          statusText: 'Отменен',
          statusColor: '#d43e2b',
        };
        break;
      }
      default:
        res = undefined;
    }

    setState(res);
  }, [status]);

  return (
    <>
      {state && (
        <p
          className="text text_type_main-default"
          style={{ color: state.statusColor }}
        >
          {state.statusText}
        </p>
      )}
    </>
  );
};

export default FeedStatus;
