import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: "January 2022",
    cardTitle: "Event 1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText: "This is the first event on the timeline.",
    backgroundColor: "white",
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
    backgroundColor: "white",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
    backgroundColor: "white",
  }
];

const index = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Chrono
        items={items}
        mode="VERTICAL"
      />
    </div>
  )
}

export default index
