import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react"
import { List, ListItem } from "flowbite-react";

export default function AboutPage(){
  return(
    <div className="flex flex-col items-center p-10">
      <h1 className="font-extralight text-4xl text-white">
        Experience
      </h1>
      <div className="mt-10 max-w-4xl">
        <Timeline>
          <TimelineItem className="pb-6">
            <TimelinePoint />
            <TimelineContent>
              <div className="flex flex-row justify-between">
                <TimelineTime className="text-sm text-gray-400"><i>September 2023 - Present</i></TimelineTime>
                <b className="text-sm text-gray-400">Jakarta, Indonesia</b>
              </div>
              <TimelineTitle className="text-white text-xl font-medium"><b>Everywhere.id</b> - <i className="font-extralight">Software Engineer (Backend)</i></TimelineTitle>
              <TimelineBody>
                <List className="text-gray-200 font-extralight mt-4 text-base">
                  <ListItem> Everywhere.id previously is GoPlay part of Gojek Product.</ListItem>
                  <ListItem> Build monitoring and alerting to check the issues from Performer or Play Everywhere Box to notify the Operational Team about the issues.</ListItem>
                  <ListItem> Involved in the migration of our microservice from GCP to Tencent Cloud.</ListItem>
                  <ListItem> Drastically decreased the size of logs from ~60GB to ~20GB per day, and improved the logging system to easier error-tracking by removing useless logs and optimizing error context and message.</ListItem>
                  <ListItem> Part of the team in charge of developing Everywhere for Business.</ListItem>
                </List>
              </TimelineBody>
              <b className="font-normal text-white"><i>Tech stack: Go, Ruby, PostgreSQL, Redis, Elasticsearch, MongoDB</i></b>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="pb-6">
            <TimelinePoint />
            <TimelineContent>
              <div className="flex flex-row justify-between">
                <TimelineTime className="text-sm text-gray-400"><i>February 2020 - September 2023</i></TimelineTime>
                <b className="text-sm text-gray-400">Jakarta, Indonesia</b>
              </div>
              <TimelineTitle className="text-white text-xl font-medium"><b>Gojek</b> - <i className="font-extralight">Software Engineer (Backend)</i></TimelineTitle>
              <TimelineBody>
                <List className="text-gray-200 font-extralight mt-4 text-base">
                  <ListItem>Part of the GoPlay Team that handles VOD products.</ListItem>
                  <ListItem>Integrate our feature with Several Internal Gojek Services (GoFood, GoMart, Promo Bundle, etc).</ListItem>
                  <ListItem>Significantly increased 70% virtual gift transactions and 30% company revenue per transaction by building a virtual currency system such as GoPlay Token and integrating it with several payment methods (Midtrans, AppStore, and Playstore). Implement double-entry bookkeeping for the methods of recording the transaction.</ListItem>
                  <ListItem>Involved in migrating from VOD to a Live Streaming platform using Agora and RTMP protocol.</ListItem>
                  <ListItem>Build a multi-streaming feature and chat integration with another streaming platform (eg. Youtube, Facebook).</ListItem>
                  <ListItem>Develop Play Everywhere Box an interactive live streaming device with a camera and microphone, so visitors and performers can two-way communication.</ListItem>
                </List>
              </TimelineBody>
              <b className="font-normal text-white"><i>Tech stack: Go, Ruby, PostgreSQL, Redis, Elasticsearch, MongoDB</i></b>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <div className="flex flex-row justify-between">
                <TimelineTime className="text-sm text-gray-400"><i>June 2019 - September 2019</i></TimelineTime>
                <b className="text-sm text-gray-400">Jakarta, Indonesia</b>
              </div>
              <TimelineTitle className="text-white text-xl font-medium"><b>Blibli.com</b> - <i className="font-extralight">Software Engineer Intern (Android)</i></TimelineTitle>
              <TimelineBody>
                <List className="text-gray-200 font-extralight mt-4 text-base">
                  <ListItem>Delivered a new feature and solved production issues on the Merchant Team.</ListItem>
                  <ListItem>Refactoring a legacy code from Java to Kotlin.</ListItem>
                  <ListItem>Ensured Unit Test coverage from 32% to above 90%.</ListItem>
                </List>
              </TimelineBody>
              <b className="font-normal text-white"><i>Tech stack: Java, Kotlin, JUnit, Mockito, MVP Design Pattern</i></b>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  )
}