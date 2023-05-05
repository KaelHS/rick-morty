import { IBadgeProps } from "./dtos"
import { FaceFrownIcon, FaceSmileIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

export const Badge = ({ value, ...rest }: IBadgeProps) => {
    const formatText = (value: string | null | undefined) => {
        if (typeof value === 'string') {
            return value.toUpperCase()
        } else  {
            return
        }
    }
    const formatType = () => {
        let icon = null
        let bgColor = ''
        switch(value) {
            case 'Alive': 
                bgColor = 'bg-green-600'
                icon = <FaceSmileIcon className="w-4 h-4"/>
            break
            case 'Dead':
                bgColor = 'bg-red-600'
                icon = <FaceFrownIcon className="w-4 h-4" />
            break
            case 'unknown':
                bgColor = 'bg-slate-600'
                icon = <QuestionMarkCircleIcon className="w-4 h-4" />
            break
            default:
                bgColor = ''
                icon = null
            break
        }
        return {
            bgColor,
            icon
        }
    }
    return (
        <div className={`flex px-4 py-1 items-center justify-between ${formatType().bgColor} bg-opacity-25 rounded-2xl w-30`} {...rest}>
            {formatType().icon}
            <p className="text-xs font-bold ml-2">{formatText(value)}</p>
        </div>
    )
}