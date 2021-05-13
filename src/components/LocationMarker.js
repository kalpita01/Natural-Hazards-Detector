import { Icon } from '@iconify/react'
import ForestFireIcon from '@iconify/icons-mdi/pine-tree-fire'
import VolcanoIcon from '@iconify/icons-mdi/campfire'
import IceBergIcon from '@iconify/icons-mdi/cube'
import StormIcon from '@iconify/icons-mdi/hurricane'

const LocationMarker = ({ iconType, onClick }) => {
    
    return (
        <div className="location-market" onClick={onClick}>
            {iconType === 'VolcanoIcon' && <Icon icon={VolcanoIcon} className="location-icon VolcanoIcon" />} 
            {iconType === 'ForestFireIcon' && <Icon icon={ForestFireIcon} className="location-icon forestFireIcon" />}
            {iconType === 'IceBergIcon' && <Icon icon={IceBergIcon} className="location-icon IceBergIcon" />} 
            {iconType === 'StormIcon' && <Icon icon={StormIcon} className="location-icon StormIcon" />}  
        </div>
    )
}

export default LocationMarker
