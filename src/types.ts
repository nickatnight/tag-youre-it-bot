import { RaRecord, Identifier } from 'react-admin'

export type ThemeName = 'light' | 'dark'

export interface Game extends RaRecord {
  ref_id: string
  created_at: Date
  subreddit_id: Identifier
}

export interface Subreddit extends RaRecord {
  ref_id: string
  created_utc: Date
  display_name: string
  description: string
  over18: boolean
  subscribers: number
  is_banned: boolean
}

export interface Player extends RaRecord {
  ref_id: string
  created_utc: Date
  username: string
  is_employee: boolean
  verified: boolean
  opted_out: boolean
  is_banned: boolean
  tag_time: Date
  icon_img: string
}

declare global {
  interface Window {
    restServer: any
  }
}
