import { motion } from 'framer-motion'
import './styles.css'

export function Notificacion ({ children, status }) {
  return (
    <motion.aside className={status} initial={{ opacity: 0, translateY: 10 }} animate={{ opacity: 1, translateY: 0 }}>
      {
        children
      }
    </motion.aside>
  )
}
