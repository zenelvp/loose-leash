"use client";

import { faqData } from "@/data/faq";
import { motion } from "framer-motion";
import React from "react";
import Accordion from "../common/Accordion";

const Faq: React.FC = () => {
  return (
    <section className="space py-24">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col justify-center items-center gap-12 lg:gap-16 relative md:max-w-[960px] m-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div
            className="text-center m-auto w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-semibold leading-tight">
              Got Questions?
              <br />
              We Have The Answers
            </h2>
          </motion.div>

          {/* Right Content (Accordion) */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Accordion items={faqData} type="single" defaultOpenIndex={0} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
