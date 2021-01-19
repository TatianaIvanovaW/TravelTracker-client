import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { ALL_COUNTRIES } from "./graphql/queries";
import { useSubscription } from "@apollo/react-hooks";
import "./styles.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.03 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function Navigation({ info }) {
  const { data } = useSubscription(ALL_COUNTRIES);

  const codeList = info
    ? info.map((c) => {
        return c.countryId;
      })
    : null;

  return (
    <motion.ul variants={variants}>
      {data && codeList
        ? data.countries.map((c, i) => {
            return codeList.includes(c.code) ? (
              <MenuItem name={c.name} key={i} />
            ) : null;
          })
        : null}
    </motion.ul>
  );
}
