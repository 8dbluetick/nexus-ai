import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

export function formatRelativeTime(date: string | Date): string {
  const now = new Date();
  const then = new Date(date);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return formatDate(date);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export function generateChatTitle(firstMessage: string): string {
  return truncateText(firstMessage, 40);
}

export function formatTokenCount(tokens: number): string {
  if (tokens < 1000) return tokens.toString();
  return `${(tokens / 1000).toFixed(1)}k`;
}

export const PLAN_LIMITS = {
  free: { dailyMessages: 10, models: ['gemini-1.5-flash'] },
  pro: { dailyMessages: 500, models: ['gemini-1.5-pro', 'gemini-1.5-flash'] },
  enterprise: { dailyMessages: Infinity, models: ['gemini-1.5-pro', 'gemini-1.5-flash'] },
} as const;

export const TOOL_CONFIGS = {
  chat: { name: 'Nexus Chat', icon: 'MessageSquare', color: 'orange' },
  research: { name: 'Research Assistant', icon: 'BookOpen', color: 'blue' },
  coding: { name: 'Coding Assistant', icon: 'Code2', color: 'green' },
  study: { name: 'Study Assistant', icon: 'GraduationCap', color: 'purple' },
  'data-analysis': { name: 'Data Analysis', icon: 'BarChart2', color: 'yellow' },
  document: { name: 'Document Assistant', icon: 'FileText', color: 'red' },
} as const;
