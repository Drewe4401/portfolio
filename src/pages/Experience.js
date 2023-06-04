import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      
      <VerticalTimeline className="timeline" lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sulphur High School, Sulphur, LA
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Server - Kyoto's Japanese SteakHouse
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sulphur, LA
          </h4>
          <p>Demonstrated exceptional customer service by proactively addressing customer needs, ensuring prompt and accurate order delivery, and maintaining a clean and inviting dining environment.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Server - BJ's Restaruant and Brewhouse
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Baton Rouge, LA
          </h4>
          <p>Provided top-notch service to customers in a fast-paced and energetic environment, recommending signature dishes and handcrafted beers as a server.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Louisiana State University, Baton Rouge, LA
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science (Software Engineering)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Quality Control Specialist - Coastal Threads
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Baton Rouge, LA
          </h4>
          <p>
          As a quality control specialist, I utilized my attention to detail to ensure that each item met strict quality standards, resulting in a high level of customer satisfaction and repeat business.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience