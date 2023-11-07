export const  containerVariants = {
    hidden: {
      opacity: 0,
      y: "50vh",
    },
    visible: {
      opacity: 1,
      transition: {delay:0.3, duration: 0.5 },
      y: 0,
    },
    exit: {
      // y: "100vh",
      // transition: {
      //   ease: "easeInOut",
      //   duration : 0.5,
      //   delay:0.3
      // },
      opacity:0,
      transition : {
        duration : 0.5,
      }
    },
  };
  