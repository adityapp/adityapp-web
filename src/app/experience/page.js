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
              <TimelineTitle className="text-white text-xl font-medium"><b>Everywhere.id (Previously GoPlay - Gojek Product)</b> - <i className="font-extralight">Software Engineer (Backend)</i></TimelineTitle>
              <TimelineBody>
                <List className="text-gray-200 font-extralight mt-4 text-base">
                  <ListItem> Build monitoring and alerting to check the issues from Performer or Play Everywhere Box to notify the Operational Team about the issues.</ListItem>
                  <ListItem> Involved in the migration of microservices from <b>Google Cloud Platform (GCP) to Tencent Cloud</b>, optimizing infrastructure reliability.</ListItem>
                  <ListItem> <b>Optimized logging system</b>, reducing log storage from <b>~60GB to 20GB/day</b>, improving error tracking and operational efficiency</ListItem>
                  <ListItem> Contributed to the development of <b>Everywhere for Business</b> platform.</ListItem>
                  <ListItem> Built a <b>People Detection using Python</b> to count viewers in Play Everywhere venues.</ListItem>
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
                  <ListItem>Developed backend services for <b>GoPlay</b>, Gojek's Video-On-Demand (VOD) platform.</ListItem>
                  <ListItem>Integrated GoPlay with <b>GoFood, GoMart, Promo Bundle</b>, and other internal services.</ListItem>
                  <ListItem><b>Designed and implemented GoPlay Token</b>, a virtual currency system integrated with <b>Midtrans, App Store, and Play Store</b>, leading to a <b>70% increase in virtual gift transactions</b> and a <b>30% rise in revenue per transaction</b>. Implemented <b>double-entry bookkeeping</b> for financial accuracy.</ListItem>
                  <ListItem>Contributed to the migration from <b>VOD to a Live Streaming</b> platform using <b>Agora and RTMP protocols.</b></ListItem>
                  <ListItem>Developed <b>multi-streaming capabilities</b> and integrated real-time chat with platforms like YouTube and Facebook.</ListItem>
                  <ListItem>Created the <b>Play Everywhere Box</b>, an interactive live-streaming device enabling two-way communication between performers and audiences.</ListItem>
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
                  <ListItem>Developed new features and resolved production issues for the <b>Merchant Team</b>.</ListItem>
                  <ListItem>Refactored legacy Java code to Kotlin for <b>improved maintainability.</b></ListItem>
                  <ListItem>Increased unit test coverage from <b>32% to 90%+</b> using <b>JUnit & Mockito.</b></ListItem>
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