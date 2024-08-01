import React, {FC} from 'react';

interface ClockProps{
    className?: string;
}

const Clock: FC<ClockProps> = ({className}) => {
    return (
        <svg
            width="16px"
            height ="16px"
            version="1.1"
            viewBox="0 0 512 512"
            fill="#198754"
            className={className}
        >
<g>
	<g id="access-time">
		<path  d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z
			 M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z"/>
        <polygon
                 points="267.75,127.5 229.5,127.5 229.5,280.5 362.1,362.1 382.5,328.95 267.75,260.1 		"/>
	</g>
</g>

</svg>
    );
};

export default Clock;