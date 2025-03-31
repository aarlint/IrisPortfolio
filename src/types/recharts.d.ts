import { ComponentType } from 'react';

declare module 'recharts' {
  export interface XAxisProps {
    dataKey?: string;
    stroke?: string;
    tick?: {
      fill?: string;
      angle?: number;
      textAnchor?: string;
    };
    height?: number;
    interval?: number;
    tickFormatter?: (value: string) => string;
  }

  export interface YAxisProps {
    stroke?: string;
    tick?: {
      fill?: string;
    };
    width?: number;
  }

  export interface CartesianGridProps {
    strokeDasharray?: string;
    stroke?: string;
  }

  export interface TooltipProps {
    contentStyle?: {
      backgroundColor?: string;
      border?: string;
      borderRadius?: string;
      color?: string;
    };
    labelStyle?: {
      color?: string;
    };
    labelFormatter?: (value: string) => string;
    formatter?: (value: number) => [string, string];
  }

  export interface LineProps {
    type?: string;
    dataKey?: string;
    stroke?: string;
    strokeWidth?: number;
    dot?: {
      fill?: string;
      strokeWidth?: number;
    };
  }

  export interface BarProps {
    dataKey?: string;
    fill?: string;
    radius?: number[];
  }

  export interface RadarProps {
    name?: string;
    dataKey?: string;
    stroke?: string;
    fill?: string;
    fillOpacity?: number;
  }

  export const XAxis: ComponentType<XAxisProps>;
  export const YAxis: ComponentType<YAxisProps>;
  export const CartesianGrid: ComponentType<CartesianGridProps>;
  export const Tooltip: ComponentType<TooltipProps>;
  export const Line: ComponentType<LineProps>;
  export const Bar: ComponentType<BarProps>;
  export const Radar: ComponentType<RadarProps>;
} 