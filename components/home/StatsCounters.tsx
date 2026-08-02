"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Layers, ShieldCheck, DollarSign, Globe2 } from 'lucide-react';

interface StatProps {
  end?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: any;
  isText?: boolean;
  textValue?: string;
  colorClass: string;
  iconBg: string;
}

function CounterItem({ end, suffix = "", prefix = "", label, icon: Icon, isText = false, textValue = "", colorClass, iconBg }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && end) {
      let start = 0;
      const duration = 1600;
      const steps = 30;
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
      className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl flex flex-col justify-between space-y-3 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${iconBg} ${colorClass} flex items-center justify-center shadow-xs shrink-0`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
      <div>
        <div className="text-xl sm:text-2xl font-black text-[#0B0757] tracking-tight leading-none">
          {isText ? textValue : `${prefix}${count.toLocaleString()}${suffix}`}
        </div>
        <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-2 leading-snug">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsCounters() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        <CounterItem
          icon={Users}
          end={5000}
          suffix="+"
          label="Students Trained"
          colorClass="text-[#0B0757]"
          iconBg="bg-blue-50 border border-blue-100"
        />
        <CounterItem
          icon={Layers}
          isText={true}
          textValue="6 Tracks"
          label="Core Skill Tracks"
          colorClass="text-[#EF7F1A]"
          iconBg="bg-amber-50 border border-amber-100"
        />
        <CounterItem
          icon={ShieldCheck}
          end={100}
          suffix="%"
          label="Practical Training"
          colorClass="text-emerald-600"
          iconBg="bg-emerald-50 border border-emerald-100"
        />
        <CounterItem
          icon={DollarSign}
          isText={true}
          textValue="$400–$2,000"
          label="Monthly Graduate Earning"
          colorClass="text-[#EF7F1A]"
          iconBg="bg-amber-50 border border-amber-100"
        />
        <CounterItem
          icon={Globe2}
          isText={true}
          textValue="Every Stage"
          label="Starters, Pros & Diaspora"
          colorClass="text-purple-700"
          iconBg="bg-purple-50 border border-purple-100"
        />
      </div>
    </div>
  );
}
