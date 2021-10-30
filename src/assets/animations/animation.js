export const templateAnim = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

export const letterAnim = {
  hidden: {
    opacity: 0,
    scale: 4,
    y: -50,
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.1, type: 'spring', stiffness: 150 },
  },
};

export const homePageImgAnim = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    top: '50%',
    left: '50%',
    x: '-50%',
    y: '-50%',
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2, delay: 1 },
  },
};

export const fadeAnim = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const imgAnim = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
};
