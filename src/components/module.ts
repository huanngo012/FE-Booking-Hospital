export interface CustomSkeletonProps {
  variant:
    | 'card-search'
    | 'card-hospital-section'
    | 'card-hospital'
    | 'card-doctor'
    | 'card-schedule'
    | 'card-patient'
    | 'card-project'
    | 'card-device-health'
    | 'card-error'
    | 'card-notify'
    | 'card-notify-popup'
    | 'table-booking'
    | 'result-popup'
}

export interface EmptyPageProps {
  title?: string
  message?: string
  style?: any
}
