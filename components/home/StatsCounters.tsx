"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, BookOpen, ShieldCheck, DollarSign, Globe2 } from 'lucide-react';

function CounterItem({ end, suffix = "", prefix = "", label, icon: Icon, isText = false, textValue = "" }: { end?: number; suffix?: string; prefix?: string; label: string; icon: any; isText?: boolean; textValue?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && end) {
      let start = 0;
      const duration = 1800;
      const steps = 40;
      const stepTime = duration / steps;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-lg hover:shadow-xl flex items-center space-x-4 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-[#0B0757] flex items-center justify-center text-[#EF7F1A] shadow-md shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="text-xl sm:text-2xl font-black text-[#0B0757] tracking-tight leading-none">
          {isText ? textValue : `${prefix}${count.toLocaleString()}${suffix}`}
        </div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-1.5 leading-snug">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsCounters() {
  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <CounterItem
          icon={Users}
          end={5000}
          suffix="+"
          label="Students Trained"
        />
        <CounterItem
          icon={BookOpen}
          isText={true}
          textValue="6 Tracks"
          label="Core Skill Tracks"
        />
        <CounterItem
          icon={ShieldCheck}
          end={100}
          suffix="%"
          label="Practical Training"
        />
        <CounterItem
          icon={DollarSign}
          isText={true}
          textValue="$400–$2,000"
          label="Monthly Graduate Earning"
        />
        <CounterItem
          icon={Globe2}
          isText={true}
          textValue="Every Stage"
          label="Starters, Pros & Diaspora"
        />
      </div>
    </div>
  );
}
