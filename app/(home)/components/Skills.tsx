'use client';

import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import {
  SiReact,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiSupabase,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    {
      text: 'React',
      Icon: SiReact,
    },
    {
      text: 'Next.js',
      Icon: SiNextdotjs,
    },
    {
      text: 'Node.js',
      Icon: SiNodedotjs,
    },
    {
      text: 'Git',
      Icon: SiGit,
    },
    {
      text: 'Supabase',
      Icon: SiSupabase,
    },
    {
      text: 'TailwindCSS',
      Icon: SiTailwindcss,
    },
    {
      text: 'Python',
      Icon: SiPython,
    },
    {
      text: 'JavaScript',
      Icon: SiJavascript,
    },
    {
      text: 'Java',
      Icon: FaJava,
    },
    {
      text: 'Typescript',
      Icon: SiTypescript,
    },
    {
      text: 'Postgres',
      Icon: SiPostgresql,
    },
    {
      text: 'MongoDB',
      Icon: SiMongodb,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
