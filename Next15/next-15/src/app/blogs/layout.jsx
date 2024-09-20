"uses client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function BlogLayout({ children }) {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/blogs/1">Post 1</Link>
            <Link href="/blogs/2">Post 2</Link>
            <Link href="/blogs/3">Post 3</Link>
            <Link href="/blogs/4">Post 4</Link>
          </li>
        </ul>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
