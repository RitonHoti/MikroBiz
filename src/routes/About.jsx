import classes from "./About.module.css";
import { motion } from "framer-motion";
import logo from "../assets/logo_mikobiz.png";
import dgP from "../assets/2.jpg";
import exp from "../assets/expansion.jpg";

const aboutListInfo = [
  {
    date: "2012",
    img: logo,
    title: "Founded Year",
    description:
      'Mikrobiz wins first place on the category "Spending Transparency". "For Pristina Digital" is a joint initiative of the Municipality of Pristina, the United Nations Program for Development and Innovation Centre Kosovo (ICK) for Kosovo citizens engaged in improving governance in the city of Pristina through technology. "For Pristina Digital" it is part of the regional initiative "Open Ideas"',
  },
  {
    date: "June 2014",
    img: dgP,
    title: "Digital Prishtina Competition",
    description:
      'Mikrobiz wins first place on the category "Spending Transparency". "For Pristina Digital" is a joint initiative of the Municipality of Pristina, the United Nations Program for Development and Innovation Centre Kosovo (ICK) for Kosovo citizens engaged in improving governance in the city of Pristina through technology. "For Pristina Digital" it is part of the regional initiative "Open Ideas"',
  },
  {
    date: "Aug- Sep 2016",
    img: exp,
    title: "Expansion Phase",
    description: "New things are coming. Stay connected!",
  },
];

function About() {
  return (
    <>
      <header>
        {aboutListInfo.map((info, index) => (
          <motion.li
            key={info.title}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 1 }}
            className={classes.list}
          >
            <img src={info.img} alt={info.title} />
            <p>{info.date}</p>
            <h2>{info.title}</h2>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 1.5 }}
            >
              {info.description}
            </motion.p>
          </motion.li>
        ))}
      </header>
    </>
  );
}

export default About;
