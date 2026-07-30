"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Award, ShieldCheck, Building2 } from 'lucide-react';

function CounterItem({ end, suffix = "", prefix = "", label, icon: Icon }: { end: number; suffix?: string; prefix?: string; label: string; icon: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1800; // 1.8s animation
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
      className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-lg hover:shadow-xl flex items-center space-x-4 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0B0757] flex items-center justify-center text-[#EF7F1A] shadow-md shrink-0">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-black text-[#0B0757] tracking-tight leading-none">
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-1.5">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsCounters() {
  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <CounterItem
          icon={Users}
          end={5000}
          suffix="+"
          label="Students Trained"
        />
        <CounterItem
          icon={Award}
          end={95}
          suffix="%"
          label="Job Placement Rate"
        />
        <CounterItem
          icon={ShieldCheck}
          end={100}
          suffix="%"
          label="Practical Training"
        />
        <CounterItem
          icon={Building2}
          end={50}
          suffix="+"
          label="Hiring Partners"
        />
      </div>
    </div>
  );
}
