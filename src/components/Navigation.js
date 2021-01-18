import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import { ALL_COUNTRIES } from "../components/graphql/queries";
import { useSubscription } from "@apollo/react-hooks";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
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
  if (codeList) console.log(`and i am a list`, codeList);
  return (
    <motion.ul variants={variants}>
      {data
        ? data.countries.map((c, i) => {
            return codeList.includes(c.code) ? (
              <MenuItem i={c.name} key={i} />
            ) : null;
          })
        : null}
    </motion.ul>
  );
}
