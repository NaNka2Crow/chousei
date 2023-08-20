"use client";

import {
  DayPilot,
  DayPilotCalendar,
  DayPilotNavigator,
} from "@daypilot/daypilot-lite-react";
import { useRef, useState } from "react";

const EVENT_BACK_COLOR = "#90faba";

const initialEvents = [
  {
    id: 1,
    text: "候補",
    start: "2023-10-02T10:30:00",
    end: "2023-10-02T13:00:00",
    backColor: EVENT_BACK_COLOR,
    participants: 0,
  },
  {
    id: 2,
    text: "候補",
    start: "2023-10-03T09:30:00",
    end: "2023-10-03T11:30:00",
    backColor: EVENT_BACK_COLOR,
    participants: 0,
  },
  {
    id: 3,
    text: "候補",
    start: "2023-10-03T12:00:00",
    end: "2023-10-03T15:00:00",
    backColor: EVENT_BACK_COLOR,
    participants: 0,
  },
];

const Calendar = () => {
  const calendarRef = useRef();

  const [events, setEvants] = useState(initialEvents);

  // イベント編集
  const editEvent = async (e) => {
    const dp = calendarRef.current?.control;
    const modal = await DayPilot.Modal.prompt("イベントの編集:", e.text());
    if (!modal.result) {
      return;
    }
    e.data.text = modal.result;
    dp.events.update(e);
  };

  // イベント追加
  const addEvent = (e) => {
    setEvants((current) => [...current, e]);
  };

  // 時間選択でイベント作成
  const onTimeRangeSelected = async (args) => {
    const dp = calendarRef.current?.control;
    addEvent({
      start: args.start,
      end: args.end,
      id: DayPilot.guid(),
      text: "候補",
      backColor: EVENT_BACK_COLOR,
      participants: 0,
    });
  };

  // イベント右クリック時のメニュー
  const contextMenu = new DayPilot.Menu({
    items: [
      {
        text: "削除",
        onClick: async (args) => {
          const dp = calendarRef.current?.control;
          dp.events.remove(args.source);
        },
      },
      {
        text: "-",
      },
      {
        text: "編集",
        onClick: async (args) => {
          await editEvent(args.source);
        },
      },
    ],
  });

  // イベントに削除ボタンとかつけれる
  const onBeforeEventRender = (args) => {
    args.data.areas = [
      {
        right: 10,
        text: "×",
        fontColor: "#007700",
        action: "None",
        toolTip: "イベントを削除",
        onClick: async (args) => {
          const dp = calendarRef.current.control;
          dp.events.remove(args.source);
        },
        style: "font-size: 18px;",
      },
      {
        bottom: 3,
        right: 10,
        fontColor: "#005500",
        action: "None",
        toolTip: "参加者数",
        text: args.data.participants,
      },
    ];
  };

  return (
    <div className="flex">
      <div className="mr-[10px]">
        <DayPilotNavigator
          selectMode={"Week"}
          showMonths={2}
          skipMonths={2}
          startDate={"2023-10-02"}
          selectionDay={"2023-10-02"}
          onTimeRangeSelected={(args) => {
            calendarRef.current?.control.update({
              startDate: args.day,
            });
          }}
        />
      </div>
      <div className="flex-grow">
        <DayPilotCalendar
          ref={calendarRef}
          viewType="Week"
          events={events}
          startDate={"2023-10-02"}
          headerDateFormat="M/d (ddd)"
          durationBarVisible={false}
          timeRangeSelectedHandling="Enabled"
          onTimeRangeSelected={onTimeRangeSelected}
          onEventClick={async (args) => {
            await editEvent(args.e);
          }}
          contextMenu={contextMenu}
          onBeforeEventRender={onBeforeEventRender}
        />
      </div>
    </div>
  );
};

export default Calendar;
