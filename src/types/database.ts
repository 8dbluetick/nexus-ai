export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          avatar: string | null;
          role: 'user' | 'admin';
          subscription_plan: 'free' | 'pro' | 'enterprise';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name?: string | null;
          avatar?: string | null;
          role?: 'user' | 'admin';
          subscription_plan?: 'free' | 'pro' | 'enterprise';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string | null;
          avatar?: string | null;
          role?: 'user' | 'admin';
          subscription_plan?: 'free' | 'pro' | 'enterprise';
          updated_at?: string;
        };
      };
      chats: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          tool_type: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title?: string;
          tool_type?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          tool_type?: string | null;
          updated_at?: string;
        };
      };
      messages: {
        Row: {
          id: string;
          chat_id: string;
          role: 'user' | 'assistant' | 'system';
          content: string;
          metadata: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          chat_id: string;
          role: 'user' | 'assistant' | 'system';
          content: string;
          metadata?: Json | null;
          created_at?: string;
        };
        Update: never;
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          plan: 'free' | 'pro' | 'enterprise';
          status: 'active' | 'cancelled' | 'expired' | 'trial';
          renewal_date: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          plan: 'free' | 'pro' | 'enterprise';
          status?: 'active' | 'cancelled' | 'expired' | 'trial';
          renewal_date?: string | null;
          created_at?: string;
        };
        Update: {
          plan?: 'free' | 'pro' | 'enterprise';
          status?: 'active' | 'cancelled' | 'expired' | 'trial';
          renewal_date?: string | null;
        };
      };
      usage_logs: {
        Row: {
          id: string;
          user_id: string;
          tool_type: string;
          tokens_used: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          tool_type: string;
          tokens_used?: number;
          created_at?: string;
        };
        Update: never;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

export type User = Database['public']['Tables']['users']['Row'];
export type Chat = Database['public']['Tables']['chats']['Row'];
export type Message = Database['public']['Tables']['messages']['Row'];
export type Subscription = Database['public']['Tables']['subscriptions']['Row'];
export type UsageLog = Database['public']['Tables']['usage_logs']['Row'];
