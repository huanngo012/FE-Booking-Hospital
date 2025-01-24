import { Marker } from 'react-map-gl'

const Markers = (props: MapboxProps) => {
  return (
    <Marker longitude={props?.long} latitude={props?.lat} anchor='bottom'>
      {props.icon}
    </Marker>
  )
}

export default Markers

export interface MapboxProps {
  long: number
  lat: number
  icon: any
  onClick?: (params: any) => any
  onMouseEnter?: (params: any) => any
  onMouseLeave?: (params: any) => any
}
