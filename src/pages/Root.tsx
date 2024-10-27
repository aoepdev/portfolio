import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants, pageTransition } from '../util/animations';

import Layout from '../components/Layout';

const Root = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.section
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Outlet />
        </motion.section>
      </AnimatePresence>
    </Layout>)
}

export default Root