export const pageMotionProps = {
  initial: 'hidden',
  whileInView: 'show',
  variants: {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        repeat: 0,
        repeatType: 'loop',
        duration: 1,
      },
    },
  }
}