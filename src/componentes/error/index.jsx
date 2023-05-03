import './styles.css'
import { motion } from 'framer-motion'

export function Error ({ children }) {
  return (
    <motion.aside className='error' initial={{ opacity: 0, translateY: 10 }} animate={{ opacity: 1, translateY: 0 }}>
      {
        children
      }
    </motion.aside>
  )
}
