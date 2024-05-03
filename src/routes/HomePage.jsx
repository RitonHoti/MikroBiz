import { Outlet } from "react-router-dom";
import classes from "./HomePage.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function HomePage() {
  const [happyClients, setHappyClients] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [dedicatedMembers, setDedicatedMembers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment happy clients until reaching 20
      if (happyClients < 20) {
        setHappyClients((prevCount) => prevCount + 1);
      }

      // Increment projects completed until reaching 43
      if (projectsCompleted < 43) {
        setProjectsCompleted((prevCount) => prevCount + 1);
      }

      // Increment dedicated members until reaching 8
      if (dedicatedMembers < 8) {
        setDedicatedMembers((prevCount) => prevCount + 1);
      }
    }, 70); // 0.7 second

    // Clean up the interval to prevent memory leaks
    return () => clearInterval(interval);
  }, [happyClients, projectsCompleted, dedicatedMembers]);

  return (
    <>
      <Outlet />
      <header className={classes.welcomeheader}>
        <div className={classes.welcomeheadercontent}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 1] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          >
            IT'S NICE TO MEET YOU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.7, 1],
            }}
          >
            We design and develop user centered digital products for desktop,
            web, and mobile platforms
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.9, 1],
            }}
          >
            We offer integration, and software programming services for
            QuickBooks.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 1] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.9, 1],
            }}
          >
            Our software programming services help solve critical business needs
            by extending and integrating QuickBooks beyond the box. By extending
            QuickBooks beyond its core functionality, we are able to provide a
            cost-effective alternative to expensive, larger accounting software
            packages.
          </motion.p>
          <div className={classes.colab}>
            <div className={classes.counter}>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 1] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
              >
                {happyClients} +{" "}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 1] }}
                transition={{
                  duration: 2,
                  times: [0, 0.5, 1],
                }}
              >
                Happy Clients
              </motion.p>
            </div>
            <div className={classes.counter}>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 1] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
              >
                {projectsCompleted} +{" "}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 1] }}
                transition={{
                  duration: 1.5,
                  times: [0, 0.5, 1],
                }}
              >
                Projects Completed
              </motion.p>
            </div>
            <div className={classes.counter}>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 1] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
              >
                {dedicatedMembers}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 1] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
              >
                Dedicated Members
              </motion.p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HomePage;
