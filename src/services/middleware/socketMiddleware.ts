import { Middleware, MiddlewareAPI } from "redux";
import { TAppActions, AppDispatch, RootState } from "../types";
import { refreshToken } from "../../utils/api-utils";

type TAction = {
  type: TAppActions;
  payload: string | number | undefined;
};

type TNextAction = (action: TAction) => unknown;

const socketMiddleware = (ws: any): Middleware => {
  console.log(ws);
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    let isConnected: boolean = false;
    let reconnectTimer: number = 0;
    let url: string = '';

    return (next: TNextAction) => (action: TAction) => {
      const { dispatch } = store;

      if (action.type === ws.init) {
        dispatch({ type: ws.fetching });

        if(typeof action.payload === 'string') {
          url = action.payload;
          socket = new WebSocket(url);
          isConnected = true;
        } 
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: ws.onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: ws.onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);

          if (parsedData.message === "Invalid or missing token") {
            refreshToken()
              .then((res) => {
                const wssUrl = new URL(url);
                wssUrl.searchParams.set(
                  "token",
                  res.accessToken.replace("Bearer ", "")
                );
                dispatch({ type: ws.init, payload: wssUrl });
              })
              .catch((err) => {
                dispatch({ type: ws.onError, payload: err });
              });
            dispatch({ type: ws.close });

            return;
          }

          dispatch({ type: ws.onMessage, payload: parsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: ws.onClose, payload: event });

          if (isConnected) {
            reconnectTimer = window.setTimeout(() => {
              dispatch({ type: ws.init, payload: url });
            }, 5000);
          }
        };
      }

      if (action.type === ws.close && socket) {
        clearTimeout(reconnectTimer);
        isConnected = false;
        reconnectTimer = 0;
        socket.close();
      }

      next(action);
    };
  };
};

export default socketMiddleware;
